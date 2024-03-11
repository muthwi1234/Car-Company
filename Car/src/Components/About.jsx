import React from 'react';

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO",
    bio: "With over a decade of experience in the automotive industry, Jane leads our company with visionary leadership and a deep understanding of customer needs.",
    imgSrc: "/images/jane-doe.jpg" // Placeholder path, replace with actual image path
  },
  {
    name: "John Smith",
    role: "Project Manager",
    bio: "John specializes in overseeing complex projects, ensuring we deliver top-notch vehicles on time and within budget.",
    imgSrc: "/images/john-smith.jpg"
  },
  {
    name: "Alice Johnson",
    role: "Sales Manager",
    bio: "Alice's expertise in sales strategies and customer service excellence drives our front-line team to success.",
    imgSrc: "/images/alice-johnson.jpg"
  },
  {
    name: "Carlos Rodriguez",
    role: "Car Dealer",
    bio: "Carlos has a keen eye for quality and a passion for cars, making him our go-to expert for sourcing the best vehicles.",
    imgSrc: "/images/carlos-rodriguez.jpg"
  },
  {
    name: "Emily Zhang",
    role: "IT Specialist",
    bio: "Emily's innovative tech solutions ensure our operations run smoothly and securely in the digital age.",
    imgSrc: "/images/emily-zhang.jpg"
  },
  {
    name: "Mohammed Al Fayed",
    role: "Finance Manager",
    bio: "Mohammed's strategic financial planning and management support our company's growth and sustainability.",
    imgSrc: "/images/mohammed-alfayed.jpg"
  },
  {
    name: "Rachel Kim",
    role: "Supervisor",
    bio: "Rachel's leadership ensures our team delivers exceptional service and quality in all aspects of our business.",
    imgSrc: "/images/rachel-kim.jpg"
  },
  // Additional roles to consider
  {
    name: "Liu Wei",
    role: "Marketing Director",
    bio: "Liu Wei drives our marketing strategy, enhancing our brand presence and connecting us with our customers globally.",
    imgSrc: "/images/liu-wei.jpg"
  },
  {
    name: "Sofia Martinez",
    role: "Customer Service Manager",
    bio: "Sofia ensures every customer experience is outstanding, managing our dedicated customer service team.",
    imgSrc: "/images/sofia-martinez.jpg"
  },
  {
    name: "Omar Hassan",
    role: "Logistics Coordinator",
    bio: "Omar optimizes our supply chain, ensuring efficient delivery of vehicles to our clients.",
    imgSrc: "/images/omar-hassan.jpg"
  }
];

const About = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="mb-6">We are a leading car company offering the best deals in the market.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map(member => (
                    <div key={member.name} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <img src={member.imgSrc} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4"/>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h2>
                        <p className="text-md font-semibold text-blue-600 mb-2">{member.role}</p>
                        <p className="text-sm text-gray-700">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;