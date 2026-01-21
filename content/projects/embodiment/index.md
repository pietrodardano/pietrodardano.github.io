---
title: Embodiment-First Learning - Interactive Dashboard
date: 2025-12-15
summary: An interactive research dashboard exploring robust tactile sensing in adversarial environments through embodiment-first learning.
tags:
  - Robotics
  - Tactile Sensing
  - Embodiment Learning
  - Interactive Research
  - Adaptive Control
_build:
  render: html
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embodiment-First Learning: Tactile Sensing Research</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- Markdown Parser -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #FAFAF9; color: #1C1917; }
        .card-shadow { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); }
        .chart-container { 
            position: relative; 
            width: 100%; 
            max-width: 800px; 
            margin-left: auto; 
            margin-right: auto; 
            height: 300px; 
            max-height: 400px; 
        } 
        @media (min-width: 768px) { .chart-container { height: 350px; } }
        
        .step-active { border-left: 4px solid #0EA5E9; background-color: #F0F9FF; }
        .step-inactive { border-left: 4px solid #D6D3D1; opacity: 0.6; }
        .step-inactive:hover { opacity: 1; border-left-color: #A8A29E; background-color: #F5F5F4; cursor: pointer; }
        
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #888; border-radius: 3px; }

        .ai-gradient-text {
            background: linear-gradient(to right, #0EA5E9, #8B5CF6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .typing-indicator span {
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #cbd5e1;
            border-radius: 50%;
            animation: typing 1s infinite;
            margin: 0 1px;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
        }
    </style>
</head>
<body class="antialiased min-h-screen flex flex-col relative">

    <!-- Header / Navigation -->
    <header class="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <span class="text-2xl mr-2">🤖</span>
                    <h1 class="text-xl font-bold tracking-tight text-stone-800">Embodiment-First <span class="text-stone-500 font-normal">Robotics Research</span></h1>
                </div>
                <nav class="hidden md:flex space-x-8">
                    <button onclick="scrollToSection('problem')" class="text-sm font-medium text-stone-600 hover:text-sky-600 transition-colors">The Problem</button>
                    <button onclick="scrollToSection('data')" class="text-sm font-medium text-stone-600 hover:text-sky-600 transition-colors">Signal Data</button>
                    <button onclick="scrollToSection('solution')" class="text-sm font-medium text-stone-600 hover:text-sky-600 transition-colors">The Solution</button>
                    <button onclick="scrollToSection('discussion')" class="text-sm font-medium text-stone-600 hover:text-sky-600 transition-colors">Methods & Q&A</button>
                </nav>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
        
        <!-- Hero Section -->
        <section class="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
            <div class="max-w-3xl mx-auto">
                <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-600 uppercase bg-sky-100 rounded-full">PhD Research Proposal</span>
                <h2 class="text-4xl font-extrabold text-stone-900 sm:text-5xl mb-6">Robust Tactile Sensing in Adversarial Environments</h2>
                <p class="text-lg text-stone-600 mb-8 leading-relaxed">
                    Robots in the real world face wet, oily, and chaotic conditions. Their sensors break, wear out, or need protective gloves. 
                    Current robots fail when their "hands" change. This research proposes an <span class="font-semibold text-stone-900">Embodiment-First Learning</span> approach: enabling robots to autonomously self-diagnose their sensor state and adapt their touch strategies.
                </p>
                <div class="flex justify-center gap-4">
                    <button onclick="scrollToSection('data')" class="bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition shadow-lg text-sm font-medium">Explore the Data Gap</button>
                    <button onclick="scrollToSection('solution')" class="bg-white text-stone-900 border border-stone-300 px-6 py-3 rounded-lg hover:bg-stone-50 transition shadow-sm text-sm font-medium">View Methodology</button>
                </div>
            </div>
        </section>

        <!-- Section 1: The Problem Space -->
        <section id="problem" class="bg-white py-16 border-y border-stone-200">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-10 text-center md:text-left">
                    <h3 class="text-2xl font-bold text-stone-800">Why Traditional Sensing Fails</h3>
                    <p class="mt-2 text-stone-600 max-w-2xl">
                        In structured automation, friction and geometry are known. In the wild, "protective" layers and environmental contaminants introduce unmodeled dynamics that corrupt 1D time-series data from sensors like the Contactile 3x3 array.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-6 rounded-xl bg-stone-50 border border-stone-100 card-shadow transition hover:-translate-y-1 duration-300">
                        <div class="text-3xl mb-4">🧤</div>
                        <h4 class="text-lg font-bold text-stone-900 mb-2">The Glove Problem</h4>
                        <p class="text-sm text-stone-600">
                            Protective fabrics introduce <strong>viscoelastic damping</strong>. A sharp touch becomes a delayed, muted signal. Standard force controllers overshoot or fail to detect contact.
                        </p>
                    </div>
                    <div class="p-6 rounded-xl bg-stone-50 border border-stone-100 card-shadow transition hover:-translate-y-1 duration-300">
                        <div class="text-3xl mb-4">💧</div>
                        <h4 class="text-lg font-bold text-stone-900 mb-2">Tribological Chaos</h4>
                        <p class="text-sm text-stone-600">
                            Oil, water, or dust alter the coefficient of friction (μ). A surface that was "sticky" yesterday is "slippery" today. Pre-programmed grasp forces result in dropped objects.
                        </p>
                    </div>
                    <div class="p-6 rounded-xl bg-stone-50 border border-stone-100 card-shadow transition hover:-translate-y-1 duration-300">
                        <div class="text-3xl mb-4">📉</div>
                        <h4 class="text-lg font-bold text-stone-900 mb-2">Sensor Drift & Wear</h4>
                        <p class="text-sm text-stone-600">
                            Physical wear on the sensor skin changes the bias. Without autonomous re-calibration (embodiment learning), the robot's perception of "zero force" is incorrect.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: Interactive Signal Data Analysis -->
        <section id="data" class="py-16 bg-stone-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                        <h3 class="text-2xl font-bold text-stone-800">The Signal Gap: Simulation</h3>
                        <p class="mt-2 text-stone-600">
                            Observe how environmental factors corrupt the clean 1D time-series data (Normal Force F_z) expected by standard controllers. 
                            <br><span class="text-sm text-sky-600 font-semibold">Interaction: Toggle conditions to see the impact on sensor readings.</span>
                        </p>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-full lg:w-1/4 space-y-4">
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                            <h5 class="font-semibold text-stone-900 mb-4">Sensor Condition</h5>
                            <div class="space-y-3">
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input type="radio" name="sensorState" value="clean" checked class="form-radio h-5 w-5 text-sky-600" onchange="updateChart()">
                                    <span class="text-stone-700">Clean / Calibrated</span>
                                </label>
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input type="radio" name="sensorState" value="glove" class="form-radio h-5 w-5 text-amber-500" onchange="updateChart()">
                                    <span class="text-stone-700">Protective Glove (Damping)</span>
                                </label>
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input type="radio" name="sensorState" value="oily" class="form-radio h-5 w-5 text-red-500" onchange="updateChart()">
                                    <span class="text-stone-700">Oily Surface (Slip/Noise)</span>
                                </label>
                            </div>
                            <div class="mt-6 pt-6 border-t border-stone-100">
                                <h5 class="font-semibold text-stone-900 mb-2">Impact Metrics</h5>
                                <div id="metricsDisplay" class="text-sm space-y-2 text-stone-600 mb-4">
                                    <div class="flex justify-between"><span>Rise Time:</span> <span class="font-mono font-bold text-sky-600">Fast</span></div>
                                    <div class="flex justify-between"><span>Peak Force:</span> <span class="font-mono font-bold text-sky-600">100%</span></div>
                                    <div class="flex justify-between"><span>Signal Noise:</span> <span class="font-mono font-bold text-sky-600">Low</span></div>
                                </div>
                                <button onclick="analyzeScenario()" id="analyzeBtn" class="w-full py-2 px-3 bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 text-white rounded-lg text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2">
                                    <span>Analyze Scenario ✨</span>
                                </button>
                            </div>
                        </div>
                        
                        <div id="aiAnalysisContainer" class="hidden bg-white p-4 rounded-xl shadow-lg border border-purple-100 ring-2 ring-purple-50 transition-all">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-lg">🤖</span>
                                <h5 class="font-bold text-sm ai-gradient-text">Gemini Physics Analysis</h5>
                            </div>
                            <div id="aiAnalysisContent" class="text-xs text-stone-600 leading-relaxed space-y-2">
                            </div>
                        </div>
                    </div>

                    <div class="w-full lg:w-3/4 bg-white p-4 rounded-xl shadow-sm border border-stone-200">
                        <div class="chart-container">
                            <canvas id="signalChart"></canvas>
                        </div>
                        <div class="mt-4 text-xs text-center text-stone-400">
                            Simulated data representing a single contact event (Probe). X-axis: Time (ms), Y-axis: Normal Force (N).
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: The Methodology (Solution) -->
        <section id="solution" class="bg-white py-16 border-y border-stone-200">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-10">
                    <h3 class="text-2xl font-bold text-stone-800">Proposed Solution: Embodiment-First Learning Loop</h3>
                    <p class="mt-2 text-stone-600">
                        Instead of assuming a fixed model (URDF), the robot must actively explore its own appendages to estimate physical parameters (K, D, μ) before attempting tasks.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    <div class="space-y-4">
                        <div id="step1" class="step-active p-5 rounded-r-lg transition-all" onclick="setStep(1)">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="text-lg font-bold text-stone-800">1. State Recognition</h4>
                                <span class="text-xs bg-stone-200 text-stone-700 px-2 py-1 rounded">Calibration</span>
                            </div>
                            <p class="text-stone-600 text-sm">
                                The robot touches a reference surface (or performs a known motion). It compares current readings to a "clean" baseline to detect anomalies (bias, offset).
                            </p>
                        </div>

                        <div id="step2" class="step-inactive p-5 rounded-r-lg transition-all" onclick="setStep(2)">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="text-lg font-bold text-stone-800">2. Physical Exploration</h4>
                                <span class="text-xs bg-stone-200 text-stone-700 px-2 py-1 rounded">Active Learning</span>
                            </div>
                            <p class="text-stone-600 text-sm">
                                Perform micro-movements to estimate Stiffness (K_norm, K_tang), Damping (D_norm), and Friction (μ). The robot "feels" the glove's squishiness.
                            </p>
                        </div>

                        <div id="step3" class="step-inactive p-5 rounded-r-lg transition-all" onclick="setStep(3)">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="text-lg font-bold text-stone-800">3. Behavior Adaptation</h4>
                                <span class="text-xs bg-stone-200 text-stone-700 px-2 py-1 rounded">Execution</span>
                            </div>
                            <p class="text-stone-600 text-sm">
                                Update the controller gains or grasp strategy based on the learned parameters. E.g., squeeze harder if a thick glove is detected.
                            </p>
                        </div>
                    </div>

                    <div class="bg-stone-50 p-6 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                        <div id="methodologyVisual" class="transition-opacity duration-300">
                        </div>
                        <div class="mt-6 w-full">
                            <div class="chart-container" style="height: 200px;">
                                <canvas id="parameterChart"></canvas>
                            </div>
                            <p class="text-xs text-stone-500 mt-2">
                                Conceptual plot: Robot identifies current state cluster (Stiffness vs. Friction)
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Section 4: Discussion & Future Work -->
        <section id="discussion" class="py-16 bg-stone-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    <div>
                        <h3 class="text-xl font-bold text-stone-800 mb-4">Strategic Questions</h3>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-6">
                            <div>
                                <h4 class="font-bold text-sky-700 text-sm uppercase tracking-wide mb-2">Reference Surface: A Must?</h4>
                                <p class="text-stone-700 text-sm leading-relaxed">
                                    Ideally, yes. A clean, rigid surface (e.g., glass) provides a ground truth for calculating K and μ. Without it (blind estimation), the robot cannot distinguish between a "soft finger" and a "soft object."
                                    <br><br>
                                    <em>Alternative:</em> Use <strong>Proprioception-Tactile fusion</strong>. If joint torques suggest high resistance but tactile sensors show low force, the sensor is likely damped or damaged.
                                </p>
                            </div>
                            <hr class="border-stone-100">
                            <div>
                                <h4 class="font-bold text-sky-700 text-sm uppercase tracking-wide mb-2">Simplification: μ_static ≈ μ_kinetic?</h4>
                                <p class="text-stone-700 text-sm leading-relaxed">
                                    For robust grasping, this approximation is acceptable for initial estimation. However, for slip detection in oily environments, the transition from static to kinetic friction is the critical failure mode and should eventually be modeled.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold text-stone-800 mb-4">Recommended Approaches</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm">1</div>
                                <div class="ml-4">
                                    <h5 class="font-bold text-stone-900 text-sm">Probabilistic Robotics</h5>
                                    <p class="text-stone-600 text-sm mt-1">Use Bayesian Filters (e.g., Particle Filter) to maintain a belief distribution over the robot's state (Clean, Gloved, Oily) based on noisy measurements.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm">2</div>
                                <div class="ml-4">
                                    <h5 class="font-bold text-stone-900 text-sm">Self-Supervised Learning</h5>
                                    <p class="text-stone-600 text-sm mt-1">Train an autoencoder on "clean" data. Use reconstruction error (anomaly detection) to trigger the active exploration routine.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm">3</div>
                                <div class="ml-4">
                                    <h5 class="font-bold text-stone-900 text-sm">System Identification</h5>
                                    <p class="text-stone-600 text-sm mt-1">Execute small sinusoidal force profiles to dynamically fit a Mass-Spring-Damper model to the end-effector contact.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </main>

    <footer class="bg-stone-900 text-stone-400 py-8 border-t border-stone-800">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <p class="text-sm">&copy; 2025 PhD Research Concept Dashboard. Based on "Embodiment-First Learning".</p>
        </div>
    </footer>

    <div id="chatWidget" class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <div id="chatWindow" class="hidden bg-white w-80 md:w-96 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden mb-4 transform transition-all origin-bottom-right">
            <div class="bg-stone-900 p-4 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <span class="text-xl">✨</span>
                    <div>
                        <h4 class="text-white font-bold text-sm">Research Assistant</h4>
                        <p class="text-stone-400 text-xs">Powered by Gemini</p>
                    </div>
                </div>
                <button onclick="toggleChat()" class="text-stone-400 hover:text-white transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            
            <div id="chatMessages" class="h-80 overflow-y-auto p-4 bg-stone-50 space-y-3 custom-scroll">
                <div class="flex items-start gap-2">
                    <div class="bg-stone-200 rounded-lg rounded-tl-none p-3 max-w-[85%] text-sm text-stone-800">
                        Hello! I'm your AI research assistant. Ask me about the paper, the physics of tactile sensing, or potential methodologies!
                    </div>
                </div>
            </div>

            <div class="p-4 bg-white border-t border-stone-100">
                <div class="flex gap-2">
                    <input type="text" id="chatInput" placeholder="Ask a question..." class="flex-1 text-sm border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" onkeypress="handleEnter(event)">
                    <button onclick="sendChatMessage()" class="bg-sky-600 text-white rounded-lg p-2 hover:bg-sky-700 transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                </div>
            </div>
        </div>

        <button onclick="toggleChat()" class="bg-stone-900 hover:bg-stone-800 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center group">
            <span class="absolute group-hover:opacity-0 transition-opacity text-2xl">🤖</span>
            <span class="absolute opacity-0 group-hover:opacity-100 transition-opacity text-2xl">✨</span>
        </button>
    </div>

    <script>
        const state = {
            currentStep: 1,
            sensorCondition: 'clean',
        };
        const apiKey = "";

        const researchContext = `
            Title: Embodiment-First Learning for Robust Tactile Sensing.
            Problem: Humanoid and service robots fail in adversarial environments (wet, oily, dust) because tactile sensors are fragile and readings get corrupted. Adding protective gloves introduces viscoelastic damping that changes sensor dynamics.
            Proposal: A robot that autonomously learns its own "body state" (clean, gloved, damaged) using embodiment-first learning.
            Core Methodology: 1. State Recognition (Compare vs clean reference). 2. Physical Exploration (Micro-movements to learn Stiffness K and Friction Mu). 3. Adaptation (Update control gains).
            Key Terms: Viscoelastic damping, tribology, hysteresis, embodiment learning, UR5e manipulator, Contactile sensors (3x3 pillars).
            Methods being considered: Probabilistic Robotics (Particle Filters), Self-Supervised Learning (Autoencoders), System Identification.
        `;

        const timeSteps = Array.from({length: 50}, (_, i) => i * 10);
        
        const generateCleanData = () => timeSteps.map(t => {
            if (t < 100) return 0;
            if (t < 150) return (t - 100) * 2;
            if (t < 400) return 100 + Math.random() * 2;
            return Math.max(0, 100 - (t - 400) * 5);
        });

        const generateGloveData = () => timeSteps.map(t => {
            if (t < 100) return 0;
            if (t < 250) return (t - 100) * 0.6;
            if (t < 400) return 90 + Math.sin(t/20) * 2;
            return Math.max(0, 90 - (t - 400) * 1);
        });

        const generateOilyData = () => timeSteps.map(t => {
            if (t < 100) return 0;
            if (t < 150) return (t - 100) * 2;
            if (t >= 150 && t < 400) {
                let base = 100;
                if (t > 200 && t < 250) base = 60;
                if (t > 300 && t < 330) base = 70;
                return base + (Math.random() - 0.5) * 15;
            }
            return Math.max(0, 80 - (t - 400) * 5);
        });

        const ctxSignal = document.getElementById('signalChart').getContext('2d');
        const signalChart = new Chart(ctxSignal, {
            type: 'line',
            data: {
                labels: timeSteps,
                datasets: [{
                    label: 'Normal Force (N)',
                    data: generateCleanData(),
                    borderColor: '#0EA5E9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.1,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { intersect: false, mode: 'index' },
                plugins: {
                    legend: { display: true },
                    tooltip: { enabled: true }
                },
                scales: {
                    y: { beginAtZero: true, max: 120, title: { display: true, text: 'Force (N)' } },
                    x: { title: { display: true, text: 'Time (ms)' } }
                }
            }
        });

        const ctxParam = document.getElementById('parameterChart').getContext('2d');
        const paramChart = new Chart(ctxParam, {
            type: 'bubble',
            data: {
                datasets: [
                    { label: 'Reference (Clean)', data: [{x: 90, y: 80, r: 10}], backgroundColor: '#0EA5E9' },
                    { label: 'Learned State', data: [], backgroundColor: '#F59E0B' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: true, text: 'Embodiment Space: Stiffness vs Friction' }
                },
                scales: {
                    x: { title: { display: true, text: 'Stiffness (K)' }, min: 0, max: 100 },
                    y: { title: { display: true, text: 'Friction Coeff (μ)' }, min: 0, max: 100 }
                }
            }
        });

        function updateChart() {
            const radios = document.getElementsByName('sensorState');
            let selected;
            for (const radio of radios) {
                if (radio.checked) { selected = radio.value; break; }
            }
            state.sensorCondition = selected;
            const metricsDiv = document.getElementById('metricsDisplay');
            let newData, color, bgColor, label, metricsHtml;
            document.getElementById('aiAnalysisContainer').classList.add('hidden');

            if (selected === 'clean') {
                newData = generateCleanData();
                color = '#0EA5E9';
                bgColor = 'rgba(14, 165, 233, 0.1)';
                label = 'Normal Force (Clean)';
                metricsHtml = `<div class="flex justify-between"><span>Rise Time:</span> <span class="font-mono font-bold text-sky-600">Fast (15ms)</span></div>
                    <div class="flex justify-between"><span>Peak Force:</span> <span class="font-mono font-bold text-sky-600">100% Target</span></div>
                    <div class="flex justify-between"><span>Signal Quality:</span> <span class="font-mono font-bold text-sky-600">High SNR</span></div>`;
            } else if (selected === 'glove') {
                newData = generateGloveData();
                color = '#F59E0B';
                bgColor = 'rgba(245, 158, 11, 0.1)';
                label = 'Normal Force (Gloved)';
                metricsHtml = `<div class="flex justify-between"><span>Rise Time:</span> <span class="font-mono font-bold text-amber-600">Slow (Damped)</span></div>
                    <div class="flex justify-between"><span>Peak Force:</span> <span class="font-mono font-bold text-amber-600">~90% (Lossy)</span></div>
                    <div class="flex justify-between"><span>Hysteresis:</span> <span class="font-mono font-bold text-amber-600">High</span></div>`;
            } else {
                newData = generateOilyData();
                color = '#EF4444';
                bgColor = 'rgba(239, 68, 68, 0.1)';
                label = 'Normal Force (Oily)';
                metricsHtml = `<div class="flex justify-between"><span>Rise Time:</span> <span class="font-mono font-bold text-red-600">Fast</span></div>
                    <div class="flex justify-between"><span>Stability:</span> <span class="font-mono font-bold text-red-600">Unstable (Slip)</span></div>
                    <div class="flex justify-between"><span>Noise:</span> <span class="font-mono font-bold text-red-600">High</span></div>`;
            }

            signalChart.data.datasets[0].data = newData;
            signalChart.data.datasets[0].borderColor = color;
            signalChart.data.datasets[0].backgroundColor = bgColor;
            signalChart.data.datasets[0].label = label;
            signalChart.update();

            const btnHtml = `<button onclick="analyzeScenario()" id="analyzeBtn" class="w-full py-2 px-3 bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 text-white rounded-lg text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2 mt-4"><span>Analyze Scenario ✨</span></button>`;
            metricsDiv.innerHTML = metricsHtml + btnHtml;
        }

        function setStep(stepId) {
            [1, 2, 3].forEach(id => {
                const el = document.getElementById(`step${id}`);
                el.className = id === stepId ? "step-active p-5 rounded-r-lg transition-all cursor-default" : "step-inactive p-5 rounded-r-lg transition-all";
            });

            const visualContainer = document.getElementById('methodologyVisual');
            let content = '';
            let chartData = [];

            if (stepId === 1) {
                content = `<div class="text-6xl mb-4">⚖️</div><h4 class="text-xl font-bold text-stone-800">Bias Check</h4><p class="text-stone-600 text-sm max-w-xs mx-auto">Comparing sensor zero-load readings against factory calibration. <br><span class="text-sky-600 font-semibold">Result: Bias Detected (-0.5N offset).</span></p>`;
                chartData = [];
            } else if (stepId === 2) {
                content = `<div class="text-6xl mb-4">🤏</div><h4 class="text-xl font-bold text-stone-800">Probing Parameters</h4><p class="text-stone-600 text-sm max-w-xs mx-auto">Executing micro-shear and compression motions. Measuring deformation response.<br><span class="text-amber-600 font-semibold">Detecting: Low Stiffness (Soft).</span></p>`;
                chartData = [{x: 40, y: 75, r: 15}];
            } else if (stepId === 3) {
                content = `<div class="text-6xl mb-4">🧠</div><h4 class="text-xl font-bold text-stone-800">Updating Model</h4><p class="text-stone-600 text-sm max-w-xs mx-auto">Controller gains updated. Grasp force increased by 15% to compensate for glove damping.<br><span class="text-green-600 font-semibold">System Ready.</span></p>`;
                chartData = [{x: 40, y: 75, r: 15}];
            }

            visualContainer.innerHTML = content;
            paramChart.data.datasets[1].data = chartData;
            paramChart.update();
        }

        async function callGemini(prompt, systemInstruction = "") {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemInstruction }] }
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("API Call Failed");
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        }

        async function analyzeScenario() {
            const condition = state.sensorCondition;
            const container = document.getElementById('aiAnalysisContainer');
            const contentDiv = document.getElementById('aiAnalysisContent');
            const btn = document.getElementById('analyzeBtn');

            btn.disabled = true;
            btn.innerHTML = `<span class="animate-spin">🌀</span> Analyzing Physics...`;
            container.classList.remove('hidden');
            contentDiv.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;

            try {
                const systemPrompt = "You are a senior robotics physicist analyzing tactile sensor signals.";
                const userPrompt = `The robot's tactile sensor is currently in a '${condition}' state. 
                Explain specifically what happens physically to the contact patch in this state (e.g., damping, coefficient of friction changes) and predict one specific way a standard PID force controller might fail. 
                Keep it under 60 words. Use bolding for key terms.`;

                const result = await callGemini(userPrompt, systemPrompt);
                contentDiv.innerHTML = marked.parse(result);
            } catch (error) {
                contentDiv.innerHTML = `<span class="text-red-500">Analysis failed. Please try again.</span>`;
            } finally {
                btn.disabled = false;
                btn.innerHTML = `<span>Analyze Scenario ✨</span>`;
            }
        }

        function toggleChat() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.classList.toggle('hidden');
        }

        function handleEnter(e) {
            if (e.key === 'Enter') sendChatMessage();
        }

        async function sendChatMessage() {
            const input = document.getElementById('chatInput');
            const messagesDiv = document.getElementById('chatMessages');
            const userText = input.value.trim();

            if (!userText) return;

            const userMsgHtml = `<div class="flex items-start gap-2 justify-end">
                    <div class="bg-sky-600 rounded-lg rounded-tr-none p-3 max-w-[85%] text-sm text-white">${userText}</div>
                </div>`;
            messagesDiv.insertAdjacentHTML('beforeend', userMsgHtml);
            input.value = '';
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            const loadingId = 'loading-' + Date.now();
            const loadingHtml = `<div id="${loadingId}" class="flex items-start gap-2">
                    <div class="bg-stone-200 rounded-lg rounded-tl-none p-3 max-w-[85%] text-sm text-stone-800">
                        <div class="typing-indicator"><span></span><span></span><span></span></div>
                    </div>
                </div>`;
            messagesDiv.insertAdjacentHTML('beforeend', loadingHtml);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            try {
                const systemPrompt = `You are a helpful research assistant for a PhD proposal titled "Embodiment-First Learning for Robust Tactile Sensing". 
                Use the following abstract/context to answer questions: ${researchContext}. 
                Keep answers concise and academic but accessible. If the user asks about something unrelated, politely bring it back to robotics or the paper.`;
                
                const reply = await callGemini(userText, systemPrompt);
                
                document.getElementById(loadingId).remove();
                const aiMsgHtml = `<div class="flex items-start gap-2">
                        <div class="bg-stone-200 rounded-lg rounded-tl-none p-3 max-w-[85%] text-sm text-stone-800 prose prose-sm">${marked.parse(reply)}</div>
                    </div>`;
                messagesDiv.insertAdjacentHTML('beforeend', aiMsgHtml);

            } catch (error) {
                document.getElementById(loadingId).remove();
                const errorHtml = `<div class="flex items-start gap-2">
                        <div class="bg-red-100 text-red-600 rounded-lg rounded-tl-none p-3 max-w-[85%] text-sm">
                            Sorry, I encountered an error connecting to the AI.
                        </div>
                    </div>`;
                messagesDiv.insertAdjacentHTML('beforeend', errorHtml);
            }
            
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        updateChart();
        setStep(1);
    </script>
</body>
</html>
