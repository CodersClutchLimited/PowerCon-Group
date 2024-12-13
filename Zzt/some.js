const cloudServicesContent = {
    "Cloud Backup Services": {
        title: "Cloud Backup Services",
        description1: "Transform your organization with reliable and automated backup solutions that ensure data safety and continuity at all times. Experience secure backups that adapt to your scaling needs with the highest industry standards.",
        description2: "We specialize in creating custom backup strategies, ensuring seamless recovery processes, and safeguarding critical organizational data. Experience dedicated <a href='#' class='text-green-900 underline'>backup optimization solutions</a> designed to fit your requirements.",
        benefits: [
            "Automated and secure backups",
            "Flexible recovery options",
            "Highly scalable storage",
            "24/7 data monitoring",
            "Optimized cost-effectiveness"
        ]
    },
    "Cloud Security Services": {
        title: "Cloud Security Services",
        description1: "Transform your organization with robust security protocols that provide unmatched protection and peace of mind. Stay ahead of threats with advanced security measures tailored to your needs.",
        description2: "We specialize in offering comprehensive threat detection systems, data encryption, and compliance monitoring. Experience tailored <a href='#' class='text-green-900 underline'>security optimization solutions</a> designed to safeguard your operations.",
        benefits: [
            "Advanced threat detection",
            "Data encryption at every level",
            "Real-time security monitoring",
            "Compliance with global standards",
            "Scalable security frameworks"
        ]
    },
    "Cloud Computing Services": {
        title: "Cloud Computing Services",
        description1: "Transform your organization with scalable and efficient cloud computing solutions that enable growth and innovation. Enhance performance and accessibility with cloud solutions that work for you.",
        description2: "We specialize in seamless cloud integration, infrastructure optimization, and on-demand resources. Experience modern <a href='#' class='text-green-900 underline'>computing solutions</a> tailored to your business needs.",
        benefits: [
            "Scalable cloud solutions",
            "Efficient infrastructure usage",
            "Global accessibility",
            "Seamless system integration",
            "Optimized performance"
        ]
    },
    "Hybrid Cloud Services": {
        title: "Hybrid Cloud Services",
        description1: "Transform your organization with a flexible hybrid cloud solution that bridges the gap between on-premises infrastructure and public cloud services. Gain control over your data while leveraging the power of the cloud.",
        description2: "We specialize in integrating private and public clouds to create a cohesive IT environment, optimizing workloads, and ensuring data security. Experience <a href='#' class='text-green-900 underline'>hybrid cloud solutions</a> built for versatility and efficiency.",
        benefits: [
            "Flexible deployment models",
            "Seamless integration of cloud and on-premises",
            "Improved workload optimization",
            "Enhanced data security and control",
            "Cost-effective cloud solutions"
        ]
    },
    "Cloud Storage Services": {
        title: "Cloud Storage Services",
        description1: "Transform your organization with scalable and secure cloud storage solutions that meet your growing data needs. Leverage cloud storage for easy access and long-term scalability.",
        description2: "We specialize in providing flexible storage options that offer data redundancy, secure backup solutions, and fast retrieval times. Experience <a href='#' class='text-green-900 underline'>cloud storage solutions</a> optimized for your business requirements.",
        benefits: [
            "Scalable storage solutions",
            "Data redundancy for added security",
            "Fast and easy data retrieval",
            "High availability and uptime",
            "Cost-efficient storage options"
        ]
    },

    "Private Cloud Services": {
        title: "Private Cloud Services",
        description1: "Transform your organization with easy migration, improved performance, and increased security with Private Cloud Services. Looking at our flexible and scalable services, you will see that eSparkBiz provides private cloud solutions according to your requirements.",
        description2: "We specialize in the virtualization of infrastructure, the reengineering of applications, and the management of private cloud services. Experience fully dedicated, <a href='#' class='text-green-900 underline'>cloud cost optimization solutions</a> with modern technologies at heart.",
        benefits: [
            "Customized private cloud solutions",
            "Infrastructure virtualization",
            "Application re-engineering",
            "Managed cloud operations",
            "Cost-effective cloud capabilities"
        ]
    },
    "Cloud Hosting Services": {
        title: "Cloud Hosting Services",
        description1: "Transform your organization with reliable, scalable, and secure cloud hosting solutions that ensure uptime and smooth performance. Ensure high availability of your business services with cloud hosting optimized for your needs.",
        description2: "We specialize in providing fully managed cloud hosting services, offering flexibility, security, and scalability. Experience <a href='#' class='text-green-900 underline'>hosting solutions</a> that adapt to your business.",
        benefits: [
            "High availability and uptime",
            "Fully managed hosting",
            "Scalable hosting solutions",
            "Enhanced data protection",
            "Cost-effective hosting plans"
        ]
    },
    "Cloud Business Services": {
        title: "Cloud Business Services",
        description1: "Transform your organization with comprehensive cloud solutions tailored to your business processes. Leverage technology to drive growth, innovation, and productivity in a rapidly evolving digital landscape.",
        description2: "We specialize in providing business-centric cloud solutions designed to meet your specific business needs. Experience <a href='#' class='text-green-900 underline'>business cloud solutions</a> built for success.",
        benefits: [
            "Business-centric cloud solutions",
            "Improved collaboration and productivity",
            "Streamlined processes and workflows",
            "Real-time business insights",
            "Scalable solutions to match business growth"
        ]
    }
    // Add similar entries for other services.
};

// Add event listeners to all links
document.querySelectorAll('.list a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all links and add it to the clicked one
        document.querySelectorAll('.list a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Get the text of the clicked link
        const selectedService = link.textContent.trim();

        // Fetch the content for the selected service
        const content = cloudServicesContent[selectedService];
        if (content) {
            // Update the content section dynamically
            const contentArea = document.querySelector('.content');
            contentArea.innerHTML = `
                <div class="p-8">
                    <h3 class="text-white text-3xl font-bold mb-8">${content.title}</h3>
                    <p class="leading-relaxed text-lg text-white text-justify mb-8">${content.description1}</p>
                    <p class="leading-relaxed text-lg text-white text-justify">${content.description2}</p>
                    <div class="left">
                        <h1 class="text-white text-2xl font-bold mb-8">Key benefits of ${content.title}:</h1>
                        <ol class="text-white">
                            ${content.benefits.map(benefit => `<li><i class="fas text-green-400 fa-check-circle mr-2"></i>${benefit}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            `;
        }
    });
});

// Load default content on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.list a').click(); // Simulate a click on the first link
});



// COLLAPSIBLE CONTENT: 
function toggleContent(id) {
    const content = document.getElementById('content-' + id);
    const arrow = document.getElementById('arrow-' + id);
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        arrow.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        arrow.classList.remove('rotate-180');
    }
}



document.addEventListener("DOMContentLoaded", function () {
    // Content for each mini card
    const cardContent = {
        "data-content": {
            title: "Data",
            text: "Data management is at the core of cloud computing. Our services help you handle, store, and analyze vast amounts of data securely and efficiently.",
            rightContent: ["AWS Lambda", "Azure Functions", "Kubernetes", "Docker"]
        },
        "database-content": {
            title: "Database",
            text: "Cloud-native databases are essential for scalability and reliability. We offer services to help you migrate, manage, and optimize your database solutions.",
            rightContent: ["AWS Lambda", "Kubernetes", "Docker"]
        },
        "app-content": {
            title: "Application",
            text: "Transform your applications to the cloud with a focus on high availability, performance, and integration with various services.",
            rightContent: ["AWS Lambda", "Azure Functions", "Docker"]
        },
        "server-content": {
            title: "Server",
            text: "We provide cloud server solutions that ensure flexibility, security, and resource optimization while scaling based on your business needs.",
            rightContent: ["Kubernetes", "Azure Functions", "Docker"]
        },
        "security-content": {
            title: "Security",
            text: "Security is a top priority in the cloud. We offer end-to-end security solutions, including encryption, identity management, and secure networking.",
            rightContent: ["AWS Lambda", "Azure Functions", "Docker"]
        },
        "modernization-content": {
            title: "Modernization",
            text: "Let us help you update your legacy applications with modern cloud-native technologies such as AWS Lambda, Azure Functions, and Docker.",
            rightContent: ["AWS Lambda", "Azure Functions", "Kubernetes", "Docker"]
        }
    };

    // Function to set content dynamically
    function setContent(target) {
        const content = cardContent[target];
        if (content) {
            // Update left side content
            document.getElementById("content-title").innerText = content.title;
            document.getElementById("content-text").innerHTML = content.text;

            // Update right side content
            const rightSideContainer = document.getElementById("right-side-content");
            rightSideContainer.innerHTML = ""; // Clear existing right side content

            content.rightContent.forEach(item => {
                const p = document.createElement("p");
                p.classList.add("border", "border-1", "bg-gray-200", "rounded-lg", "p-2", "mb-2", "mr-2", "text-center");
                p.innerText = item;
                rightSideContainer.appendChild(p);
            });
        }
    }

    // Add event listeners to each mini card
    document.querySelectorAll(".mini-card").forEach(card => {
        card.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all mini cards
            document.querySelectorAll(".mini-card").forEach(item => item.classList.remove("bg-black", "text-white"));

            // Add active class to clicked card
            this.classList.add("bg-black", "text-white");

            // Update content based on the clicked card
            const target = this.getAttribute("data-target");
            setContent(target);
        });
    });

    // Initialize content with the first card ("Data")
    const firstCard = document.querySelector(".mini-card");
    if (firstCard) {
        firstCard.classList.add("bg-black", "text-white");
        const initialTarget = firstCard.getAttribute("data-target");
        setContent(initialTarget);
    }
});
