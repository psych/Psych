import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


  
    type LoginProps = {
    modalOpen: "register" | "questionnaire" | "login" | null;
    setModalOpen: React.Dispatch<React.SetStateAction<"register" | "questionnaire" | "login" | null>>;
  };
  
  export default function Login({ modalOpen, setModalOpen }: LoginProps) {
  
    return (
      <AnimatePresence>
              {modalOpen === "login" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white rounded-xl p-8 max-w-md w-full"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold">Login</h3>
                      <button onClick={() => setModalOpen(null)}>
                        <X className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-[#4A90E2] hover:underline">Forgot password?</a>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#4A90E2] text-white py-3 rounded-lg hover:bg-[#357ABD] transition-all font-medium"
                      >
                        Login
                      </motion.button>
                      <p className="text-center text-gray-600 text-sm mt-4">
                        Don't have an account?{" "}
                        <button 
                          onClick={() => setModalOpen("register")}
                          className="text-[#4A90E2] hover:underline font-medium"
                        >
                          Register
                        </button>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
    );
  }  