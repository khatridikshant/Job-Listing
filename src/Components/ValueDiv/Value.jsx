import React from "react";
export default function Value(){
    return(
        <div>
            <div className="text-2xl p-2 font-bold">
            Our mission is to connect talented individuals with exciting career opportunities that align with their skills, passions, and aspirations.
                </div>

                <div className="grid grid-cols-6 mt-2 gap-2">
                    <div className="col-span-2 block bg-blue-200 rounded-lg hover:bg-slate-100">
                        <h2 className="flex justify-center font-semibold mb-2 pt-4">Advanced Job Matching</h2>
                        <p className="p-5">Our sophisticated algorithms analyze your skills, experience, and preferences to match you with the most relevant job opportunities, ensuring a perfect fit.</p>
                    </div>
                    <div className="col-span-2 block bg-blue-200 rounded-lg hover:bg-slate-100">
                        <h2 className="flex justify-center font-semibold mb-2 pt-4">Intuitive Job Search</h2>
                        <p className="p-5">Find jobs quickly with our user-friendly interface. Filter by location, industry, and job type to streamline your search process.</p>
                    </div>

                    <div className="col-span-2 block bg-blue-200 rounded-lg hover:bg-slate-100">
                        <h2 className="flex justify-center font-semibold mb-2 pt-4">Personalized Job Alerts</h2>
                        <p className="p-5">Receive customized notifications about new job postings that align with your career interests and goals.</p>
                    </div>

                </div>
        </div>
    )

}