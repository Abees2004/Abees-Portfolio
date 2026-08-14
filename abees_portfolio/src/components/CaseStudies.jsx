import { ExternalLink, ArrowRight, Code2, Check, Monitor, Layers, Server, Database, ShieldCheck, CreditCard, LayoutDashboard, Braces, LockKeyhole, Workflow, WalletCards, CircleCheck, Search, UserRoundCheck, CalendarClock, ClipboardCheck, MonitorSmartphone, PlugZap, CalendarPlus, MapPin, Settings2, ClipboardList, Shield, UsersRound, CalendarCheck, Building2, User } from 'lucide-react'
import { Github } from './BrandIcons'
import fooddelivery from '../assets/fooddeliverymain.avif'
import multiservice from '../assets/multiservicemain.avif'
import turfbooking from '../assets/turfbookingmain.avif'
import quickbite1 from '../assets/quickbite1.png'
import quickbite2 from '../assets/quickbite2.png'
import quickbite3 from '../assets/quickbite3.png'
import quickbite4 from '../assets/quickbite4.png'
import quickbite5 from '../assets/quickbite5.png'
import quickbite6 from '../assets/quickbite6.png'
import servezone1 from '../assets/servezone1.png'
import servezone2 from '../assets/servezone2.png'
import servezone3 from '../assets/servezone3.png'
import servezone4 from '../assets/servezone4.png'
import servezone5 from '../assets/servezone5.png'
import servezone6 from '../assets/servezone6.png'


export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        <div className="text-center space-y-3">
          <span className="text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">Deep Dives</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Project Case Studies</h2>
        </div>

        {/* CASE STUDY 01: FOOD DELIVERY SYSTEM - commented out in original, not rendered */}


        <article id="case-study-food" class="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 space-y-10">

            <div class="space-y-4 border-b border-slate-800 pb-6">

                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    <div>
                        <span class="text-xs font-mono text-brand-400 uppercase tracking-widest">
                            Case Study 01
                        </span>

                        <h3 class="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                            Food Delivery System
                        </h3>

                        <p class="text-slate-400 text-base mt-1">
                            Multi-Role Food Delivery Platform
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center gap-3">

                        <a href="https://github.com/Abees2004/QuickBite"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg flex items-center gap-2 transition-colors">
                            <i class="fa-brands fa-github text-sm"></i>
                            GitHub Repository
                        </a>

                        <a href="https://github.com/Abees2004/QuickBite"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="px-4 py-2 bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/20 font-medium text-xs rounded-lg flex items-center gap-2 transition-colors">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                            Live Demo
                        </a>

                    </div>
                </div>

                {/* <!-- Technology Stack --> */}
                <div class="flex flex-wrap gap-2 pt-2">

                    <span class="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">
                        React.js
                    </span>

                    <span class="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">
                        Redux Toolkit
                    </span>

                    <span class="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">
                        Django REST Framework
                    </span>

                    <span class="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">
                        MySQL
                    </span>

                    <span class="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">
                        JWT
                    </span>

                    <span class="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">
                        Razorpay
                    </span>

                </div>
            </div>


            {/* <!-- =========================================================
                HERO SCREENSHOT
            ========================================================== --> */}
            <div class="space-y-3">

                <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Application Overview
                </h4>

                <div class="rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">

                    <div class="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">

                        <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>

                        <div class="hidden sm:block px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 sm:w-1/2 text-center">
                            food-delivery-system.app
                        </div>

                        <span class="text-xs font-mono text-emerald-400">
                            Full Stack Application
                        </span>

                    </div>

                    <div class="relative aspect-video w-full overflow-hidden">

                        <img
                            src={fooddelivery}
                            alt="Food Delivery System dashboard"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />

                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                        <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">

                            <span class="bg-slate-900/90 px-3 py-1.5 rounded border border-slate-700">
                                Food Delivery Platform
                            </span>

                            <span class="hidden sm:block bg-slate-900/90 px-3 py-1.5 rounded border border-slate-700">
                                Application Dashboard
                            </span>

                        </div>

                    </div>
                </div>
            </div>


            {/* <!-- =========================================================
                OVERVIEW + MY ROLE
            ========================================================== --> */}
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">

                {/* <!-- Overview --> */}
                <div class="lg:col-span-7 space-y-5">

                    <div>
                        <h4 class="text-xl font-bold text-white mb-3">
                            Project Overview
                        </h4>

                        <p class="text-slate-300 text-sm leading-relaxed">
                            Developed a full-stack food delivery platform that manages
                            the complete ordering workflow between customers,
                            restaurants, administrators, and delivery partners.
                            The system handles authentication, restaurant and menu
                            management, cart operations, order processing, payments,
                            and delivery workflows through structured REST APIs.
                        </p>
                    </div>

                    {/* <!-- Workflow --> */}
                    <div class="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-3">

                        <p class="text-slate-400 uppercase tracking-wider text-[11px] font-mono">
                            Application Workflow
                        </p>

                        <div class="flex flex-wrap items-center gap-2 text-slate-200 text-xs font-mono">

                            <span class="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                                Customer
                            </span>

                            <i class="fa-solid fa-arrow-right text-brand-400"></i>

                            <span class="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                                Restaurant
                            </span>

                            <i class="fa-solid fa-arrow-right text-brand-400"></i>

                            <span class="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                                Cart
                            </span>

                            <i class="fa-solid fa-arrow-right text-brand-400"></i>

                            <span class="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                                Order
                            </span>

                            <i class="fa-solid fa-arrow-right text-brand-400"></i>

                            <span class="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                                Payment
                            </span>

                            <i class="fa-solid fa-arrow-right text-brand-400"></i>

                            <span class="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">
                                Delivery
                            </span>

                        </div>
                    </div>

                </div>


                {/* <!-- My Role --> */}
                <div class="lg:col-span-5 bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">

                    <h4 class="text-sm font-bold text-white font-mono flex items-center gap-2">
                        <i class="fa-solid fa-code text-brand-400"></i>
                        My Role
                    </h4>

                    <ul class="space-y-3 text-sm text-slate-300">

                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-brand-400 shrink-0 mt-0.5"></i>
                            Developed React.js interfaces and reusable frontend components.
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-brand-400 shrink-0 mt-0.5"></i>
                            Designed and developed REST APIs using Django REST Framework.
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-brand-400 shrink-0 mt-0.5"></i>
                            Implemented authentication and role-based access control.
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-brand-400 shrink-0 mt-0.5"></i>
                            Built cart, order, payment, and delivery workflows.
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-check text-brand-400 shrink-0 mt-0.5"></i>
                            Worked with relational database models and optimized ORM queries.
                        </li>

                    </ul>

                </div>

            </div>

        {/* 
            <!-- =========================================================
                ARCHITECTURE
            ========================================================== --> */}
            <div class="space-y-4">

                <h4 class="text-xl font-bold text-white">
                    System Architecture
                </h4>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs font-mono">

                    <div class="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                        <i class="fa-solid fa-desktop text-base text-brand-400 mx-auto mb-2 block"></i>
                        <p class="text-white font-semibold">
                            React.js
                        </p>
                        <p class="text-slate-500 mt-1">
                            User Interface
                        </p>
                    </div>

                    <div class="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                        <i class="fa-solid fa-layer-group text-base text-cyan-400 mx-auto mb-2 block"></i>
                        <p class="text-white font-semibold">
                            Redux Toolkit
                        </p>
                        <p class="text-slate-500 mt-1">
                            Client State
                        </p>
                    </div>

                    <div class="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                        <i class="fa-solid fa-server text-base text-emerald-400 mx-auto mb-2 block"></i>
                        <p class="text-white font-semibold">
                            Django REST Framework
                        </p>
                        <p class="text-slate-500 mt-1">
                            REST API Layer
                        </p>
                    </div>

                    <div class="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                        <i class="fa-solid fa-database text-base text-purple-400 mx-auto mb-2 block"></i>
                        <p class="text-white font-semibold">
                            MySQL
                        </p>
                        <p class="text-slate-500 mt-1">
                            Relational Database
                        </p>
                    </div>

                </div>

                <div class="flex justify-center text-slate-500">
                    <i class="fa-solid fa-arrow-down text-sm"></i>
                </div>

                <div class="p-4 bg-slate-900/70 rounded-xl border border-slate-800 text-center">

                    <div class="flex flex-wrap justify-center gap-3">

                        <span class="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                            JWT Authentication
                        </span>

                        <span class="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                            Role-Based Access
                        </span>

                        <span class="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                            Razorpay
                        </span>

                    </div>

                </div>

            </div>


            {/* <!-- =========================================================
                KEY FEATURES
            ========================================================== --> */}
            <div class="space-y-5">

                <h4 class="text-xl font-bold text-white">
                    Key Features
                </h4>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <i class="fa-solid fa-shield-halved text-brand-400 text-lg mb-3 block"></i>

                        <h5 class="text-sm font-bold text-white">
                            Authentication & Authorization
                        </h5>

                        <p class="text-xs text-slate-400 leading-relaxed mt-2">
                            Secure authentication with role-based access
                            controlling customer, restaurant, delivery,
                            and administrative workflows.
                        </p>

                    </div>


                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <i class="fa-solid fa-cart-shopping text-brand-400 text-lg mb-3 block"></i>

                        <h5 class="text-sm font-bold text-white">
                            Cart & Order Management
                        </h5>

                        <p class="text-xs text-slate-400 leading-relaxed mt-2">
                            Complete cart lifecycle and order processing
                            workflow from item selection through delivery.
                        </p>

                    </div>


                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <i class="fa-solid fa-credit-card text-brand-400 text-lg mb-3 block"></i>

                        <h5 class="text-sm font-bold text-white">
                            Payment Integration
                        </h5>

                        <p class="text-xs text-slate-400 leading-relaxed mt-2">
                            Integrated Razorpay payment processing into
                            the order workflow.
                        </p>

                    </div>


                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <i class="fa-solid fa-store text-brand-400 text-lg mb-3 block"></i>

                        <h5 class="text-sm font-bold text-white">
                            Restaurant Management
                        </h5>

                        <p class="text-xs text-slate-400 leading-relaxed mt-2">
                            Restaurant and menu management workflows
                            for managing food listings and availability.
                        </p>

                    </div>


                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <i class="fa-solid fa-truck text-brand-400 text-lg mb-3 block"></i>

                        <h5 class="text-sm font-bold text-white">
                            Delivery Workflow
                        </h5>

                        <p class="text-xs text-slate-400 leading-relaxed mt-2">
                            Structured order status and delivery workflows
                            for delivery partner operations.
                        </p>

                    </div>


                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <i class="fa-solid fa-gauge-high text-brand-400 text-lg mb-3 block"></i>

                        <h5 class="text-sm font-bold text-white">
                            Role-Based Dashboards
                        </h5>

                        <p class="text-xs text-slate-400 leading-relaxed mt-2">
                            Separate workflows and interfaces based on
                            the responsibilities of each user role.
                        </p>

                    </div>

                </div>

            </div>



            <div class="space-y-5">

                <h4 class="text-xl font-bold text-white">
                    Technical Implementation
                </h4>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* 
                    <!-- API --> */}
                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <div class="flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-code text-brand-400 text-base"></i>
                            <h5 class="font-bold text-white">
                                REST API Architecture
                            </h5>
                        </div>

                        <p class="text-sm text-slate-400 leading-relaxed">
                            Developed structured REST APIs using Django REST Framework
                            for authentication, restaurant management, food items,
                            cart operations, orders, payments, and role-specific
                            application workflows.
                        </p>

                    </div>


                    {/* <!-- Authentication --> */}
                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <div class="flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-lock text-brand-400 text-base"></i>
                            <h5 class="font-bold text-white">
                                Authentication & RBAC
                            </h5>
                        </div>

                        <p class="text-sm text-slate-400 leading-relaxed">
                            Implemented JWT-based authentication and role-based
                            authorization to control access to protected resources
                            and provide different workflows for each application role.
                        </p>

                    </div>


                    {/* <!-- Database --> */}
                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <div class="flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-database text-brand-400 text-base"></i>
                            <h5 class="font-bold text-white">
                                Database & ORM
                            </h5>
                        </div>

                        <p class="text-sm text-slate-400 leading-relaxed">
                            Designed relational data models and optimized Django ORM
                            operations using select_related and prefetch_related
                            where appropriate to reduce unnecessary database access
                            and avoid N+1 query patterns.
                        </p>

                    </div>


                    {/* <!-- State --> */}
                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <div class="flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-diagram-project text-brand-400 text-base"></i>
                            <h5 class="font-bold text-white">
                                Frontend State Management
                            </h5>
                        </div>

                        <p class="text-sm text-slate-400 leading-relaxed">
                            Used React.js and Redux Toolkit to manage frontend
                            application state and implement reusable components
                            for core user workflows.
                        </p>

                    </div>


                    {/* <!-- Payments --> */}
                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <div class="flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-wallet text-brand-400 text-base"></i>
                            <h5 class="font-bold text-white">
                                Payment Processing
                            </h5>
                        </div>

                        <p class="text-sm text-slate-400 leading-relaxed">
                            Integrated Razorpay into the order workflow to support
                            online payment processing and payment verification.
                        </p>

                    </div>


                    {/* <!-- Code Quality --> */}
                    <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800">

                        <div class="flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-file-code text-brand-400 text-base"></i>
                            <h5 class="font-bold text-white">
                                Maintainable Code
                            </h5>
                        </div>

                        <p class="text-sm text-slate-400 leading-relaxed">
                            Structured frontend and backend components around
                            reusable application logic to keep the codebase
                            easier to maintain and extend.
                        </p>

                    </div>

                </div>

            </div>


            {/* <!-- =========================================================
                CHALLENGES & SOLUTIONS
            ========================================================== --> */}
            <div class="space-y-5">

                <h4 class="text-xl font-bold text-white">
                    Challenges & Solutions
                </h4>


                <div class="space-y-4">

        {/* 
                    <!-- Challenge 01 --> */}
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">

                        <div class="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800">

                            <span class="text-[11px] font-mono uppercase tracking-wider text-red-400">
                                Challenge
                            </span>

                            <h5 class="text-sm font-bold text-white mt-2">
                                Unnecessary Database Queries
                            </h5>

                            <p class="text-sm text-slate-400 leading-relaxed mt-2">
                                Retrieving related objects across complex application
                                workflows can result in unnecessary database queries
                                and N+1 query patterns.
                            </p>

                        </div>


                        <div class="hidden lg:flex lg:col-span-2 items-center justify-center">
                            <i class="fa-solid fa-arrow-right text-brand-400 text-base"></i>
                        </div>


                        <div class="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20">

                            <span class="text-[11px] font-mono uppercase tracking-wider text-brand-400">
                                Solution
                            </span>

                            <h5 class="text-sm font-bold text-white mt-2">
                                Django ORM Optimization
                            </h5>

                            <p class="text-sm text-slate-400 leading-relaxed mt-2">
                                Applied select_related and prefetch_related to
                                efficiently load related objects and reduce
                                unnecessary database access.
                            </p>

                        </div>

                    </div>

        {/* 
                    <!-- Challenge 02 --> */}
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">

                        <div class="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800">

                            <span class="text-[11px] font-mono uppercase tracking-wider text-red-400">
                                Challenge
                            </span>

                            <h5 class="text-sm font-bold text-white mt-2">
                                Multiple User Roles
                            </h5>

                            <p class="text-sm text-slate-400 leading-relaxed mt-2">
                                Different users require different application
                                capabilities, workflows, and protected resources.
                            </p>

                        </div>


                        <div class="hidden lg:flex lg:col-span-2 items-center justify-center">
                            <i class="fa-solid fa-arrow-right text-brand-400 text-base"></i>
                        </div>


                        <div class="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20">

                            <span class="text-[11px] font-mono uppercase tracking-wider text-brand-400">
                                Solution
                            </span>

                            <h5 class="text-sm font-bold text-white mt-2">
                                Role-Based Authorization
                            </h5>

                            <p class="text-sm text-slate-400 leading-relaxed mt-2">
                                Implemented role-based access controls to separate
                                customer, restaurant, delivery, and administrative
                                workflows and protect restricted operations.
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* <!-- =========================================================
                APPLICATION SCREENSHOTS
            ========================================================== --> */}
            <div class="space-y-4 pt-4">
                <div class="flex items-center justify-between">
                    <h4 class="text-xl font-bold text-white">Application Screenshot Gallery</h4>
                    <span class="text-xs font-mono text-slate-500">6 Feature Views</span>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div class="gallery-item space-y-2">
                        <div class="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                            <img src={quickbite1} alt="Food Delivery Platform - Restaurant Listing View" class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <span class="text-[11px] font-mono text-slate-400 block text-center">Restaurant Listing</span>
                    </div>

                    <div class="gallery-item space-y-2">
                        <div class="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                            <img src={quickbite2} alt="Food Delivery Platform - Interactive Menu & Items" class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <span class="text-[11px] font-mono text-slate-400 block text-center">Menu & Items</span>
                    </div>

                    <div class="gallery-item space-y-2">
                        <div class="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                            <img src={quickbite3} alt="Food Delivery Platform - Cart & Order Summary" class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <span class="text-[11px] font-mono text-slate-400 block text-center">Cart Overview</span>
                    </div>

                    <div class="gallery-item space-y-2">
                        <div class="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                            <img src={quickbite4} alt="Food Delivery Platform - Food Management" class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <span class="text-[11px] font-mono text-slate-400 block text-center">Food Management</span>
                    </div>

                    <div class="gallery-item space-y-2">
                        <div class="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                            <img src={quickbite5} alt="Food Delivery Platform - Admin & Partner Control Panel" class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <span class="text-[11px] font-mono text-slate-400 block text-center">Admin Panel</span>
                    </div>

                    <div class="gallery-item space-y-2">
                        <div class="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                            <img src={quickbite6} alt="Food Delivery Platform - Order Details" class="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <span class="text-[11px] font-mono text-slate-400 block text-center">Order Details</span>
                    </div>
                </div>
            </div>


            {/* <!-- =========================================================
                OUTCOME
            ========================================================== --> */}
            <div class="p-6 sm:p-7 rounded-xl bg-brand-500/5 border border-brand-500/20">

                <div class="flex items-start gap-4">

                    <div class="p-2.5 rounded-lg bg-brand-500/10 shrink-0">
                        <i class="fa-solid fa-circle-check text-brand-400 text-lg"></i>
                    </div>

                    <div>

                        <h4 class="text-lg font-bold text-white">
                            Project Outcome
                        </h4>

                        <p class="text-sm text-slate-400 leading-relaxed mt-2">
                            Built a complete full-stack food delivery workflow
                            covering authentication, role-based access,
                            restaurant and menu management, cart operations,
                            order processing, payment integration, and delivery
                            workflows while maintaining structured and optimized
                            backend operations.
                        </p>

                    </div>

                </div>

            </div>

        </article>









        {/* CASE STUDY 02: MULTI-SERVICE BOOKING PLATFORM */}
        <article id="case-study-booking" className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 space-y-10">

          {/* Header */}
          <div className="space-y-4 border-b border-slate-800 pb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div>
                <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">Case Study 02</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Multi-Service Booking Platform</h3>
                <p className="text-slate-400 text-base mt-1">Service Discovery, Scheduling &amp; Booking Platform</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://github.com/Abees2004/ServeZone" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg flex items-center gap-2 transition-colors">
                  <Github className="w-4 h-4" /> GitHub Repository
                </a>
                <span className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-700/50 font-medium text-xs rounded-lg flex items-center gap-2 cursor-default">
                  <ExternalLink className="w-4 h-4" /> Demo Coming Soon
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">React.js</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">Redux Toolkit</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">Django REST Framework</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">PostgreSQL</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">JWT</span>
            </div>
          </div>

          {/* Hero Screenshot */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Application Overview</h4>
            <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
              <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="hidden sm:block px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 sm:w-1/2 text-center">
                  service-booking-platform.app
                </div>
                <span className="text-xs font-mono text-emerald-400">Full Stack Application</span>
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <img src={multiservice} alt="Multi-Service Booking Platform dashboard" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="bg-slate-900/90 px-3 py-1.5 rounded border border-slate-700">Service Booking Platform</span>
                  <span className="hidden sm:block bg-slate-900/90 px-3 py-1.5 rounded border border-slate-700">Responsive Web Application</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview + My Role */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Project Overview</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Developed a full-stack service booking platform that allows customers to discover services, select service providers, choose available dates and time slots, and place bookings through a structured digital workflow. The platform also provides service providers with dedicated workflows for managing their services and bookings.
                </p>
              </div>
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-3">
                <p className="text-slate-400 uppercase tracking-wider text-[11px] font-mono">Booking Workflow</p>
                <div className="flex flex-wrap items-center gap-2 text-slate-200 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Customer</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Provider</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Date &amp; Time</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Booking</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Code2 className="w-4 h-4 text-brand-400" /> My Role
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Developed React.js interfaces for service discovery, provider selection, and booking workflows.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Developed REST APIs using Django REST Framework for services, providers, and bookings.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Implemented authentication and protected application workflows using role-based permissions.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Implemented booking creation with date, time-slot, address, and status management.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Developed service-provider dashboard workflows for managing bookings and service operations.</li>
              </ul>
            </div>
          </div>

          {/* System Architecture */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">System Architecture</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs font-mono">
              <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                <Monitor className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                <p className="text-white font-semibold">React.js</p>
                <p className="text-slate-500 mt-1">Frontend Application</p>
              </div>
              <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                <Layers className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Redux Toolkit</p>
                <p className="text-slate-500 mt-1">Client State</p>
              </div>
              <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                <Server className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Django REST Framework</p>
                <p className="text-slate-500 mt-1">API Layer</p>
              </div>
              <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800">
                <Database className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">PostgreSQL</p>
                <p className="text-slate-500 mt-1">Relational Database</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <Search className="w-5 h-5 text-brand-400 mb-3" />
                <h5 className="text-sm font-bold text-white">Service Discovery</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">Customers can browse available service categories and identify suitable services based on their needs.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <UserRoundCheck className="w-5 h-5 text-brand-400 mb-3" />
                <h5 className="text-sm font-bold text-white">Service Provider Selection</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">Customers can view service providers associated with selected services before placing a booking.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <CalendarClock className="w-5 h-5 text-brand-400 mb-3" />
                <h5 className="text-sm font-bold text-white">Date &amp; Time Scheduling</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">Booking workflows support selecting preferred dates and available time slots for requested services.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <ClipboardCheck className="w-5 h-5 text-brand-400 mb-3" />
                <h5 className="text-sm font-bold text-white">Booking Management</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">Structured booking workflows manage booking details, status changes, and customer information.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <LayoutDashboard className="w-5 h-5 text-brand-400 mb-3" />
                <h5 className="text-sm font-bold text-white">Provider Dashboard</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">Service providers have dedicated workflows for managing their services and customer bookings.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-brand-400 mb-3" />
                <h5 className="text-sm font-bold text-white">Role-Based Access</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">Protected API endpoints and application workflows ensure users can access only the functionality available to their role.</p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Technical Implementation</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3"><Braces className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">REST API Development</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Developed Django REST Framework APIs for service categories, service providers, partner services, and customer bookings, providing structured communication between the React frontend and backend.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3"><CalendarPlus className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Booking Workflow</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Implemented booking workflows containing service provider, date, time slot, customer address, pincode, and booking status information.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3"><Database className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Relational Data Modeling</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Structured relationships between users, services, service providers, partner services, and bookings to support the application's booking workflows and data retrieval requirements.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3"><LockKeyhole className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Authentication &amp; Permissions</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Protected application workflows using authentication and role-based permissions to separate customer, provider, and administrative operations.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3"><MonitorSmartphone className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Responsive Frontend</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Built responsive React.js interfaces for service discovery, provider selection, booking creation, and dashboard workflows.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3"><PlugZap className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Frontend &amp; API Integration</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Connected React components with backend APIs to retrieve services, providers, booking information, and update application state based on user actions.</p>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Challenges &amp; Solutions</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400">Challenge</span>
                  <h5 className="text-sm font-bold text-white mt-2">Connecting Services With Providers</h5>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">Customers need to identify providers offering a selected service before proceeding with a booking.</p>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center"><ArrowRight className="w-5 h-5 text-brand-400" /></div>
                <div className="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400">Solution</span>
                  <h5 className="text-sm font-bold text-white mt-2">Structured Service Relationships</h5>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">Structured service-provider relationships and API filtering so the frontend can retrieve providers associated with the selected service.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400">Challenge</span>
                  <h5 className="text-sm font-bold text-white mt-2">Managing Booking Information</h5>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">A booking needs to maintain customer details, selected provider, service date, time slot, address, and status throughout its lifecycle.</p>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center"><ArrowRight className="w-5 h-5 text-brand-400" /></div>
                <div className="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400">Solution</span>
                  <h5 className="text-sm font-bold text-white mt-2">Structured Booking Model</h5>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">Designed the booking workflow around structured relational data and explicit booking status transitions to keep booking information consistent.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400">Challenge</span>
                  <h5 className="text-sm font-bold text-white mt-2">Role-Specific Workflows</h5>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">Customers, service providers, and administrators require different capabilities within the same application.</p>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center"><ArrowRight className="w-5 h-5 text-brand-400" /></div>
                <div className="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400">Solution</span>
                  <h5 className="text-sm font-bold text-white mt-2">Role-Based Access Control</h5>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">Applied role-based permissions to protect API operations and provide users with workflows appropriate to their responsibilities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-white">Application Screenshot Gallery</h4>
              <span className="text-xs font-mono text-slate-500">6 Feature Views</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="gallery-item space-y-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                  <img src={servezone1} alt="Booking Platform - Home Page" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block text-center">Home Page</span>
              </div>
              <div className="gallery-item space-y-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                  <img src={servezone2} alt="Booking Platform - Service Listing" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block text-center">Service Listing</span>
              </div>
              <div className="gallery-item space-y-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                  <img src={servezone3} alt="Booking Platform - Booking Slot Selection" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block text-center">Booking Slot Section</span>
              </div>
              <div className="gallery-item space-y-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                  <img src={servezone4} alt="Booking Platform - Payment" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block text-center">Payment</span>
              </div>
              <div className="gallery-item space-y-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                  <img src={servezone5} alt="Booking Platform - Admin Dashboard" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block text-center">Admin Dashboard</span>
              </div>
              <div className="gallery-item space-y-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container">
                  <img src={servezone6} alt="Booking Platform - Order Details" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block text-center">Order Details</span>
              </div>

            </div>
          </div>

          {/* Outcome */}
          <div className="p-6 sm:p-7 rounded-xl bg-brand-500/5 border border-brand-500/20">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-brand-500/10 shrink-0"><CircleCheck className="w-5 h-5 text-brand-400" /></div>
              <div>
                <h4 className="text-lg font-bold text-white">Project Outcome</h4>
                <p className="text-sm text-slate-400 leading-relaxed mt-2">Built a complete service booking workflow connecting customers with service providers through service discovery, provider selection, scheduling, and booking management, supported by structured REST APIs, relational data models, and role-based application workflows.</p>
              </div>
            </div>
          </div>
        </article>

        {/* CASE STUDY 03: TURF BOOKING SYSTEM */}
        <article id="case-study-turf" className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 space-y-10">

          {/* Header */}
          <div className="space-y-4 border-b border-slate-800 pb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div>
                <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">Case Study 03</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Turf Booking System</h3>
                <p className="text-slate-400 text-base mt-1">Turf Discovery, Slot Booking &amp; Payment Platform</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://github.com/Abees2004/TurfZone" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg flex items-center gap-2 transition-colors">
                  <Github className="w-4 h-4" /> GitHub Repository
                </a>
                <span className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-700/50 font-medium text-xs rounded-lg flex items-center gap-2 cursor-default">
                  <ExternalLink className="w-4 h-4" /> Demo Coming Soon
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">Django</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">Python</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">MySQL</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">Razorpay</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">HTML</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">CSS</span>
              <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-mono">JavaScript</span>
            </div>
          </div>

          {/* Application Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Application Overview</h4>
            <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
              <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="hidden sm:block px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 sm:w-1/2 text-center">turf-booking-platform.app</div>
                <span className="text-xs font-mono text-emerald-400">Django Application</span>
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <img src={turfbooking} alt="Turf Booking System interface" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="bg-slate-900/90 px-3 py-1.5 rounded border border-slate-700">Turf Booking System</span>
                  <span className="hidden sm:block bg-slate-900/90 px-3 py-1.5 rounded border border-slate-700">Online Booking &amp; Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview + My Role */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Project Overview</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Developed a Django-based turf booking platform that enables customers to discover and book sports turfs while allowing turf owners to manage their facilities and bookings. The platform includes separate workflows for customers, turf owners, and administrators, with Razorpay integrated for online payment processing.</p>
              </div>
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-3">
                <p className="text-slate-400 uppercase tracking-wider text-[11px] font-mono">Booking Flow</p>
                <div className="flex flex-wrap items-center gap-2 text-slate-200 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Customer</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Turf</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Slot</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Booking</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Razorpay</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2"><Code2 className="w-4 h-4 text-brand-400" /> My Role</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Designed and developed the Django-based application and its core booking workflows.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Implemented separate workflows for customers, turf owners, and administrators.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Designed relational database models using MySQL for users, turfs, slots, and booking information.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Implemented online payment processing using Razorpay.</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Developed booking and turf-management workflows for customers and turf owners.</li>
              </ul>
            </div>
          </div>

          {/* Role-Based Platform */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Role-Based Platform</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-brand-500/10"><User className="w-5 h-5 text-brand-400" /></div><h5 className="font-bold text-white">Customer</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Browse available turfs, select suitable booking slots, place bookings, and complete payments through the platform.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-brand-500/10"><Building2 className="w-5 h-5 text-brand-400" /></div><h5 className="font-bold text-white">Turf Owner</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Manage turf information, available slots, and customer bookings through a dedicated owner workflow.</p>
              </div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-brand-500/10"><ShieldCheck className="w-5 h-5 text-brand-400" /></div><h5 className="font-bold text-white">Administrator</h5></div>
                <p className="text-sm text-slate-400 leading-relaxed">Manage platform-level data and oversee users, turf operations, and booking activity.</p>
              </div>
            </div>
          </div>

          {/* System Architecture */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">System Architecture</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs font-mono">
              <div className="p-5 bg-slate-900/70 rounded-xl border border-slate-800">
                <Monitor className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Web Interface</p>
                <p className="text-slate-500 mt-1">HTML / CSS / JavaScript</p>
              </div>
              <div className="p-5 bg-slate-900/70 rounded-xl border border-slate-800">
                <Server className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Django</p>
                <p className="text-slate-500 mt-1">Application &amp; Business Logic</p>
              </div>
              <div className="p-5 bg-slate-900/70 rounded-xl border border-slate-800">
                <Database className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">MySQL</p>
                <p className="text-slate-500 mt-1">Relational Data Storage</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><MapPin className="w-5 h-5 text-brand-400 mb-3" /><h5 className="text-sm font-bold text-white">Turf Discovery</h5><p className="text-xs text-slate-400 leading-relaxed mt-2">Customers can browse available turf facilities and select a suitable location for booking.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><CalendarClock className="w-5 h-5 text-brand-400 mb-3" /><h5 className="text-sm font-bold text-white">Slot Booking</h5><p className="text-xs text-slate-400 leading-relaxed mt-2">Customers can select available time slots and create turf bookings through the platform.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><CreditCard className="w-5 h-5 text-brand-400 mb-3" /><h5 className="text-sm font-bold text-white">Online Payments</h5><p className="text-xs text-slate-400 leading-relaxed mt-2">Integrated Razorpay to support online payment processing as part of the booking workflow.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><Settings2 className="w-5 h-5 text-brand-400 mb-3" /><h5 className="text-sm font-bold text-white">Turf Management</h5><p className="text-xs text-slate-400 leading-relaxed mt-2">Turf owners can manage their turf information and booking-related operations.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><ClipboardList className="w-5 h-5 text-brand-400 mb-3" /><h5 className="text-sm font-bold text-white">Booking Management</h5><p className="text-xs text-slate-400 leading-relaxed mt-2">Booking information is organized around customers, turfs, selected slots, and payment activity.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><Shield className="w-5 h-5 text-brand-400 mb-3" /><h5 className="text-sm font-bold text-white">Role-Based Access</h5><p className="text-xs text-slate-400 leading-relaxed mt-2">Separate application workflows for customers, turf owners, and administrators.</p></div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Technical Implementation</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><div className="flex items-center gap-2 mb-3"><Server className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Django Backend</h5></div><p className="text-sm text-slate-400 leading-relaxed">Built the application using Django, implementing the core business logic for turf management, slot booking, users, and booking workflows.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><div className="flex items-center gap-2 mb-3"><Database className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Relational Database</h5></div><p className="text-sm text-slate-400 leading-relaxed">Used MySQL to persist users, turf information, slot availability, bookings, and related application data.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><div className="flex items-center gap-2 mb-3"><UsersRound className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Multi-Role Architecture</h5></div><p className="text-sm text-slate-400 leading-relaxed">Structured the application around three primary user types — customer, turf owner, and administrator — with role-specific functionality.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><div className="flex items-center gap-2 mb-3"><WalletCards className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Razorpay Integration</h5></div><p className="text-sm text-slate-400 leading-relaxed">Integrated Razorpay into the booking workflow to support online payments and connect successful transactions with customer bookings.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><div className="flex items-center gap-2 mb-3"><CalendarCheck className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Booking Logic</h5></div><p className="text-sm text-slate-400 leading-relaxed">Implemented the booking flow around turf availability, selected time slots, customer information, and booking records.</p></div>
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800"><div className="flex items-center gap-2 mb-3"><ShieldCheck className="w-5 h-5 text-brand-400" /><h5 className="font-bold text-white">Administrative Management</h5></div><p className="text-sm text-slate-400 leading-relaxed">Provided administrative functionality for managing the platform's core entities and overseeing booking-related operations.</p></div>
            </div>
          </div>

          {/* Challenges */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Challenges &amp; Solutions</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800"><span className="text-[11px] font-mono uppercase tracking-wider text-red-400">Challenge</span><h5 className="text-sm font-bold text-white mt-2">Managing Multiple User Roles</h5><p className="text-sm text-slate-400 leading-relaxed mt-2">Customers, turf owners, and administrators require different workflows and permissions within the same platform.</p></div>
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center"><ArrowRight className="w-5 h-5 text-brand-400" /></div>
                <div className="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20"><span className="text-[11px] font-mono uppercase tracking-wider text-brand-400">Solution</span><h5 className="text-sm font-bold text-white mt-2">Role-Specific Workflows</h5><p className="text-sm text-slate-400 leading-relaxed mt-2">Separated customer, turf-owner, and administrative operations so each role receives functionality relevant to its responsibilities.</p></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800"><span className="text-[11px] font-mono uppercase tracking-wider text-red-400">Challenge</span><h5 className="text-sm font-bold text-white mt-2">Connecting Payments With Bookings</h5><p className="text-sm text-slate-400 leading-relaxed mt-2">The booking workflow needed to incorporate online payment processing without separating the payment experience from the booking flow.</p></div>
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center"><ArrowRight className="w-5 h-5 text-brand-400" /></div>
                <div className="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20"><span className="text-[11px] font-mono uppercase tracking-wider text-brand-400">Solution</span><h5 className="text-sm font-bold text-white mt-2">Razorpay Payment Integration</h5><p className="text-sm text-slate-400 leading-relaxed mt-2">Integrated Razorpay into the booking workflow to handle online payment processing and connect payment activity with booking records.</p></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/60 border border-slate-800"><span className="text-[11px] font-mono uppercase tracking-wider text-red-400">Challenge</span><h5 className="text-sm font-bold text-white mt-2">Organizing Turf Availability</h5><p className="text-sm text-slate-400 leading-relaxed mt-2">Customers need clear information about available turf slots before creating a booking.</p></div>
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center"><ArrowRight className="w-5 h-5 text-brand-400" /></div>
                <div className="lg:col-span-5 p-5 rounded-xl bg-brand-500/5 border border-brand-500/20"><span className="text-[11px] font-mono uppercase tracking-wider text-brand-400">Solution</span><h5 className="text-sm font-bold text-white mt-2">Slot-Based Booking Workflow</h5><p className="text-sm text-slate-400 leading-relaxed mt-2">Structured the booking process around turf availability and selectable time slots before allowing customers to proceed with a booking.</p></div>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          {/* <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-white">Application Screenshot Gallery</h4>
              <span className="text-xs font-mono text-slate-500">6 Feature Views</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="gallery-item space-y-2"><div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Booking Platform - Service Categories View" className="w-full h-full object-cover" loading="lazy" /></div><span className="text-[11px] font-mono text-slate-400 block text-center">Service Listing</span></div>
              <div className="gallery-item space-y-2"><div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Booking Platform - Service Provider Profile Card" className="w-full h-full object-cover" loading="lazy" /></div><span className="text-[11px] font-mono text-slate-400 block text-center">Service Provider</span></div>
              <div className="gallery-item space-y-2"><div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container"><img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80" alt="Booking Platform - Time Slot Selection UI" className="w-full h-full object-cover" loading="lazy" /></div><span className="text-[11px] font-mono text-slate-400 block text-center">Slot Selection</span></div>
              <div className="gallery-item space-y-2"><div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Booking Platform - Reservation Confirmation Screen" className="w-full h-full object-cover" loading="lazy" /></div><span className="text-[11px] font-mono text-slate-400 block text-center">Confirmation</span></div>
              <div className="gallery-item space-y-2"><div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container"><img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" alt="Booking Platform - User Booking Management Dashboard" className="w-full h-full object-cover" loading="lazy" /></div><span className="text-[11px] font-mono text-slate-400 block text-center">Booking Management</span></div>
              <div className="gallery-item space-y-2"><div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-800 relative img-zoom-container"><img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" alt="Booking Platform - Admin Provider Control Panel" className="w-full h-full object-cover" loading="lazy" /></div><span className="text-[11px] font-mono text-slate-400 block text-center">Admin / Provider Panel</span></div>
            </div>
          </div> */}

          {/* Outcome */}
          <div className="p-6 sm:p-7 rounded-xl bg-brand-500/5 border border-brand-500/20">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-brand-500/10 shrink-0"><CircleCheck className="w-5 h-5 text-brand-400" /></div>
              <div>
                <h4 className="text-lg font-bold text-white">Project Outcome</h4>
                <p className="text-sm text-slate-400 leading-relaxed mt-2">Built a complete turf booking workflow that connects customers with turf facilities through slot-based booking and online payments, while providing turf owners and administrators with dedicated management capabilities.</p>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}
