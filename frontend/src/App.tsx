// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Zap, Shield, BarChart3, Cpu, GitBranch, Monitor, Users, CheckCircle, Star } from "lucide-react"
// import Link from "next/link"
// import { motion } from "framer-motion"

// // Animation variants
// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" },
// }

// const fadeInDown = {
//   initial: { opacity: 0, y: -60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" },
// }

// const fadeIn = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   transition: { duration: 0.6 },
// }

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const staggerItem = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5 },
// }

// const scaleOnHover = {
//   whileHover: { scale: 1.05 },
//   whileTap: { scale: 0.95 },
//   transition: { type: "spring", stiffness: 300, damping: 20 },
// }

// const cardHover = {
//   whileHover: {
//     y: -8,
//     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//   },
//   transition: { type: "spring", stiffness: 300, damping: 20 },
// }

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Header */}
//       <motion.header
//         className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white/80 backdrop-blur-md fixed w-full z-50"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           <motion.div
//             className="flex items-center space-x-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
//               <Cpu className="h-5 w-5 text-white" />
//             </div>
//             <span className="text-xl font-bold text-black">LLMOps</span>
//           </motion.div>
//           <nav className="hidden md:flex items-center space-x-8">
//             <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
//               <Link href="#features" className="text-gray-600 hover:text-black transition-colors">
//                 Features
//               </Link>
//             </motion.div>
//             <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
//               <Link href="#pricing" className="text-gray-600 hover:text-black transition-colors">
//                 Pricing
//               </Link>
//             </motion.div>
//             <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
//               <Link href="#docs" className="text-gray-600 hover:text-black transition-colors">
//                 Docs
//               </Link>
//             </motion.div>
//             <motion.div {...scaleOnHover}>
//               <Button variant="outline" className="border-gray-300">
//                 Sign In
//               </Button>
//             </motion.div>
//             <motion.div {...scaleOnHover}>
//               <Button className="bg-black hover:bg-gray-800">Get Started</Button>
//             </motion.div>
//           </nav>
//         </div>
//       </motion.header>

//       <main className="flex-1 pt-16">
//         {/* Hero Section */}
//         <section className="py-20 lg:py-32 overflow-hidden">
//           <div className="container mx-auto px-4 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <Badge variant="outline" className="mb-6 border-gray-300 text-gray-600">
//                 🚀 Now in Public Beta
//               </Badge>
//             </motion.div>

//             <motion.h1
//               className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               The Complete
//               <br />
//               <motion.span
//                 className="text-gray-600"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               >
//                 LLM Operations
//               </motion.span>
//               <br />
//               Platform
//             </motion.h1>

//             <motion.p
//               className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               Deploy, monitor, and scale your large language models with confidence. Built for AI teams who demand
//               reliability, performance, and control.
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1 }}
//             >
//               <motion.div {...scaleOnHover}>
//                 <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
//                   Start Building
//                   <motion.div
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
//                   >
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </motion.div>
//                 </Button>
//               </motion.div>
//               <motion.div {...scaleOnHover}>
//                 <Button size="lg" variant="outline" className="border-gray-300 px-8">
//                   View Demo
//                 </Button>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               className="flex items-center justify-center space-x-8 text-sm text-gray-500"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 1.2 }}
//             >
//               <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
//                 <CheckCircle className="h-4 w-4" />
//                 <span>Free tier available</span>
//               </motion.div>
//               <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
//                 <CheckCircle className="h-4 w-4" />
//                 <span>No credit card required</span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <motion.section
//           className="py-16 bg-gray-50"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="container mx-auto px-4">
//             <motion.div
//               className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
//               variants={staggerContainer}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <motion.div variants={staggerItem}>
//                 <motion.div
//                   className="text-3xl font-bold text-black mb-2"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   99.9%
//                 </motion.div>
//                 <div className="text-gray-600">Uptime SLA</div>
//               </motion.div>
//               <motion.div variants={staggerItem}>
//                 <motion.div
//                   className="text-3xl font-bold text-black mb-2"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   50ms
//                 </motion.div>
//                 <div className="text-gray-600">Avg Response</div>
//               </motion.div>
//               <motion.div variants={staggerItem}>
//                 <motion.div
//                   className="text-3xl font-bold text-black mb-2"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
//                   viewport={{ once: true }}
//                 >
//                   10B+
//                 </motion.div>
//                 <div className="text-gray-600">API Calls/Month</div>
//               </motion.div>
//               <motion.div variants={staggerItem}>
//                 <motion.div
//                   className="text-3xl font-bold text-black mb-2"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   500+
//                 </motion.div>
//                 <div className="text-gray-600">Enterprise Clients</div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Features Section */}
//         <section id="features" className="py-20">
//           <div className="container mx-auto px-4">
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Everything you need for LLM Operations</h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 From deployment to monitoring, we've got every aspect of your LLM lifecycle covered.
//               </p>
//             </motion.div>

//             <motion.div
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//               variants={staggerContainer}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardHeader>
//                     <motion.div
//                       className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <Zap className="h-6 w-6 text-white" />
//                     </motion.div>
//                     <CardTitle className="text-black">Lightning Fast Deployment</CardTitle>
//                     <CardDescription className="text-gray-600">
//                       Deploy your models in seconds with our optimized infrastructure and auto-scaling capabilities.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>

//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardHeader>
//                     <motion.div
//                       className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <BarChart3 className="h-6 w-6 text-white" />
//                     </motion.div>
//                     <CardTitle className="text-black">Real-time Monitoring</CardTitle>
//                     <CardDescription className="text-gray-600">
//                       Track performance, costs, and usage patterns with comprehensive analytics and alerting.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>

//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardHeader>
//                     <motion.div
//                       className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <Shield className="h-6 w-6 text-white" />
//                     </motion.div>
//                     <CardTitle className="text-black">Enterprise Security</CardTitle>
//                     <CardDescription className="text-gray-600">
//                       SOC 2 compliant with end-to-end encryption, VPC support, and advanced access controls.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>

//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardHeader>
//                     <motion.div
//                       className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <GitBranch className="h-6 w-6 text-white" />
//                     </motion.div>
//                     <CardTitle className="text-black">Version Control</CardTitle>
//                     <CardDescription className="text-gray-600">
//                       Manage model versions, rollbacks, and A/B testing with built-in experiment tracking.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>

//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardHeader>
//                     <motion.div
//                       className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <Monitor className="h-6 w-6 text-white" />
//                     </motion.div>
//                     <CardTitle className="text-black">Multi-Cloud Support</CardTitle>
//                     <CardDescription className="text-gray-600">
//                       Deploy across AWS, GCP, and Azure with unified management and cost optimization.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>

//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardHeader>
//                     <motion.div
//                       className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       <Users className="h-6 w-6 text-white" />
//                     </motion.div>
//                     <CardTitle className="text-black">Team Collaboration</CardTitle>
//                     <CardDescription className="text-gray-600">
//                       Built-in collaboration tools with role-based access and shared workspaces.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <motion.section
//           className="py-20 bg-gray-50"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="container mx-auto px-4">
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Trusted by AI teams worldwide</h2>
//             </motion.div>

//             <motion.div
//               className="grid md:grid-cols-3 gap-8"
//               variants={staggerContainer}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardContent className="pt-6">
//                     <motion.div
//                       className="flex items-center mb-4"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ duration: 0.6, delay: 0.2 }}
//                       viewport={{ once: true }}
//                     >
//                       {[...Array(5)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ scale: 0 }}
//                           whileInView={{ scale: 1 }}
//                           transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
//                           viewport={{ once: true }}
//                         >
//                           <Star className="h-4 w-4 fill-black text-black" />
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                     <p className="text-gray-600 mb-4">
//                       "LLMOps has transformed how we deploy and manage our AI models. The monitoring capabilities are
//                       unmatched."
//                     </p>
//                     <div className="flex items-center">
//                       <motion.div
//                         className="w-10 h-10 bg-gray-300 rounded-full mr-3"
//                         whileHover={{ scale: 1.1 }}
//                       ></motion.div>
//                       <div>
//                         <div className="font-semibold text-black">Sarah Chen</div>
//                         <div className="text-sm text-gray-600">CTO, TechCorp</div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardContent className="pt-6">
//                     <motion.div
//                       className="flex items-center mb-4"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ duration: 0.6, delay: 0.2 }}
//                       viewport={{ once: true }}
//                     >
//                       {[...Array(5)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ scale: 0 }}
//                           whileInView={{ scale: 1 }}
//                           transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
//                           viewport={{ once: true }}
//                         >
//                           <Star className="h-4 w-4 fill-black text-black" />
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                     <p className="text-gray-600 mb-4">
//                       "The deployment speed and reliability have exceeded our expectations. Our models are now in
//                       production 10x faster."
//                     </p>
//                     <div className="flex items-center">
//                       <motion.div
//                         className="w-10 h-10 bg-gray-300 rounded-full mr-3"
//                         whileHover={{ scale: 1.1 }}
//                       ></motion.div>
//                       <div>
//                         <div className="font-semibold text-black">Marcus Johnson</div>
//                         <div className="text-sm text-gray-600">Lead ML Engineer, DataFlow</div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//               <motion.div variants={staggerItem} {...cardHover}>
//                 <Card className="border-gray-200 h-full">
//                   <CardContent className="pt-6">
//                     <motion.div
//                       className="flex items-center mb-4"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ duration: 0.6, delay: 0.2 }}
//                       viewport={{ once: true }}
//                     >
//                       {[...Array(5)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ scale: 0 }}
//                           whileInView={{ scale: 1 }}
//                           transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
//                           viewport={{ once: true }}
//                         >
//                           <Star className="h-4 w-4 fill-black text-black" />
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                     <p className="text-gray-600 mb-4">
//                       "Finally, a platform that understands the complexities of enterprise AI deployment. Game changer."
//                     </p>
//                     <div className="flex items-center">
//                       <motion.div
//                         className="w-10 h-10 bg-gray-300 rounded-full mr-3"
//                         whileHover={{ scale: 1.1 }}
//                       ></motion.div>
//                       <div>
//                         <div className="font-semibold text-black">Emily Rodriguez</div>
//                         <div className="text-sm text-gray-600">VP Engineering, AI Solutions</div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* CTA Section */}
//         <motion.section
//           className="py-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="container mx-auto px-4 text-center">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-black mb-4"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               Ready to scale your AI operations?
//             </motion.h2>
//             <motion.p
//               className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               Join thousands of AI teams who trust LLMOps for their mission-critical deployments.
//             </motion.p>
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <motion.div {...scaleOnHover}>
//                 <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
//                   Start Free Trial
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </motion.div>
//               <motion.div {...scaleOnHover}>
//                 <Button size="lg" variant="outline" className="border-gray-300 px-8">
//                   Schedule Demo
//                 </Button>
//               </motion.div>
//             </motion.div>
//             <motion.div
//               className="max-w-md mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex gap-2">
//                 <Input placeholder="Enter your email" className="border-gray-300" />
//                 <motion.div {...scaleOnHover}>
//                   <Button className="bg-black hover:bg-gray-800">Subscribe</Button>
//                 </motion.div>
//               </div>
//               <p className="text-sm text-gray-500 mt-2">Get updates on new features and best practices</p>
//             </motion.div>
//           </div>
//         </motion.section>
//       </main>

//       {/* Footer */}
//       <motion.footer
//         className="bg-black text-white py-12"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="grid md:grid-cols-4 gap-8"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <motion.div variants={staggerItem}>
//               <motion.div className="flex items-center space-x-2 mb-4" whileHover={{ scale: 1.05 }}>
//                 <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
//                   <Cpu className="h-5 w-5 text-black" />
//                 </div>
//                 <span className="text-xl font-bold">LLMOps</span>
//               </motion.div>
//               <p className="text-gray-400">The complete platform for LLM operations and deployment.</p>
//             </motion.div>
//             <motion.div variants={staggerItem}>
//               <h3 className="font-semibold mb-4">Product</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Features
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Pricing
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Security
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Enterprise
//                   </Link>
//                 </motion.li>
//               </ul>
//             </motion.div>
//             <motion.div variants={staggerItem}>
//               <h3 className="font-semibold mb-4">Resources</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Documentation
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     API Reference
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Tutorials
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Blog
//                   </Link>
//                 </motion.li>
//               </ul>
//             </motion.div>
//             <motion.div variants={staggerItem}>
//               <h3 className="font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     About
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Careers
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Contact
//                   </Link>
//                 </motion.li>
//                 <motion.li whileHover={{ x: 4 }}>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Support
//                   </Link>
//                 </motion.li>
//               </ul>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-gray-400">© 2024 LLMOps. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <motion.div whileHover={{ y: -2 }}>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Privacy
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ y: -2 }}>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Terms
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ y: -2 }}>
//                 <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Cookies
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.footer>
//     </div>
//   )
// }
