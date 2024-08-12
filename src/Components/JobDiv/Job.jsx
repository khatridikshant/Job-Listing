import React from 'react'
import { BiTimeFive } from 'react-icons/bi'


const Data = [
  {
    'id': 1,
    'image': 'https://placehold.co/55x55?font=roboto&text=huawei',
    'time': 'Now',
    'location': 'Canada',
    'desc': 'We are looking for a Web Developer who is passionate about creating innovative web applications. You will be working on exciting projects that involve both front-end and back-end technologies. Join us to make an impact in the tech world.',
    'company': 'Huawei Technologies & Co',
    'jobtitle': 'Web Developer'
  },
  {
    'id': 2,
    'image': 'https://placehold.co/55x55?font=roboto&text=airbnb',
    'time': '3 months ago',
    'location': 'USA',
    'desc': 'Airbnb is hiring a Customer Experience Manager to ensure an outstanding customer journey. You will lead initiatives to enhance service quality, resolve customer issues, and drive improvements in customer satisfaction.',
    'company': 'Airbnb Inc.',
    'jobtitle': 'Customer Experience Manager'
  },
  {
    'id': 3,
    'image': 'https://placehold.co/55x55?font=roboto&text=amazon',
    'time': '1 week ago',
    'location': 'Australia',
    'desc': 'Amazon is in search of a Product Manager to oversee product development and strategy. You will work with various teams to define product vision, create roadmaps, and ensure successful delivery of products that meet customer needs.',
    'company': 'Amazon.com Inc.',
    'jobtitle': 'Product Manager'
  },
  {
    'id': 4,
    'image': 'https://placehold.co/55x55?font=roboto&text=spotify',
    'time': '1 week ago',
    'location': 'Sweden',
    'desc': 'Spotify is hiring a Data Engineer to build and maintain data pipelines and analytical tools. You will work on optimizing data workflows, ensuring data integrity, and supporting data-driven decision-making across the organization.',
    'company': 'Spotify Technology S.A.',
    'jobtitle': 'Data Engineer'
  },
  {
    'id': 5,
    'image': 'https://placehold.co/55x55?font=roboto&text=paypal',
    'time': '4 days ago',
    'location': 'Spain',
    'desc': 'PayPal is looking for a Financial Analyst to provide insights into financial performance and trends. The role involves analyzing financial data, creating forecasts, and assisting in strategic planning to drive business growth.',
    'company': 'PayPal Holdings Inc.',
    'jobtitle': 'Financial Analyst'
  },
  {
    'id': 6,
    'image': 'https://placehold.co/55x55?font=roboto&text=facebook',
    'time': '2 weeks ago',
    'location': 'India',
    'desc': 'Facebook is hiring a Front-End Developer to build engaging web applications. You will be responsible for creating user-friendly interfaces, optimizing performance, and ensuring a high-quality user experience across our platforms.',
    'company': 'Facebook Inc.',
    'jobtitle': 'Front-End Developer'
  },
  {
    'id': 7,
    'image': 'https://placehold.co/55x55?font=roboto&text=twitter',
    'time': '1 month ago',
    'location': 'France',
    'desc': 'Twitter is seeking a DevOps Engineer to streamline our development and deployment processes. This role involves automating workflows, managing infrastructure, and ensuring the reliability and scalability of our systems.',
    'company': 'Twitter Inc.',
    'jobtitle': 'DevOps Engineer'
  },
  {
    'id': 8,
    'image': 'https://placehold.co/55x55?font=roboto&text=ibm',
    'time': '6 months ago',
    'location': 'Japan',
    'desc': 'IBM is looking for a Cloud Architect to design and implement cloud-based solutions. You will work on creating scalable cloud architectures, optimizing performance, and ensuring security and compliance in cloud environments.',
    'company': 'IBM Corporation',
    'jobtitle': 'Cloud Architect'
  },
  {
    'id': 9,
    'image': 'https://placehold.co/55x55?font=roboto&text=oracle',
    'time': '3 months ago',
    'location': 'China',
    'desc': 'Oracle is hiring a Business Analyst to analyze business needs and provide data-driven insights. This role involves working closely with stakeholders to gather requirements, create reports, and support decision-making processes.',
    'company': 'Oracle Corporation',
    'jobtitle': 'Business Analyst'
  },
  {
    'id': 10,
    'image': 'https://placehold.co/55x55?font=roboto&text=salesforce',
    'time': '1 year ago',
    'location': 'Brazil',
    'desc': 'Salesforce is seeking a CRM Specialist to manage customer relationship management systems. You will be responsible for implementing CRM strategies, optimizing workflows, and ensuring the effective use of CRM tools to enhance customer interactions.',
    'company': 'Salesforce.com Inc.',
    'jobtitle': 'CRM Specialist'
  },
  {
    'id': 11,
    'image': 'https://placehold.co/55x55?font=roboto&text=adobe',
    'time': '1 month ago',
    'location': 'Netherlands',
    'desc': 'Adobe is looking for a Marketing Manager to develop and execute marketing strategies. The role involves creating campaigns, analyzing market trends, and working with cross-functional teams to enhance brand presence and drive sales.',
    'company': 'Adobe Inc.',
    'jobtitle': 'Marketing Manager'
  },
  {
    'id': 12,
    'image': 'https://placehold.co/55x55?font=roboto&text=nvidia',
    'time': '2 weeks ago',
    'location': 'South Korea',
    'desc': 'NVIDIA is seeking a Hardware Engineer to design and test advanced hardware components. You will be responsible for developing new technologies, improving existing designs, and ensuring the reliability of hardware products.',
    'company': 'NVIDIA Corporation',
    'jobtitle': 'Hardware Engineer'
  },
  {
    'id': 13,
    'image': 'https://placehold.co/55x55?font=roboto&text=tesla',
    'time': '5 months ago',
    'location': 'USA',
    'desc': 'Tesla is seeking a Mechanical Engineer to design and develop advanced automotive components. The role involves working on cutting-edge technologies, improving product designs, and ensuring high performance and reliability.',
    'company': 'Tesla Inc.',
    'jobtitle': 'Mechanical Engineer'
  },
  {
    'id': 14,
    'image': 'https://placehold.co/55x55?font=roboto&text=intel',
    'time': '6 weeks ago',
    'location': 'Taiwan',
    'desc': 'Intel is hiring an Embedded Systems Engineer to work on cutting-edge embedded technology. You will be involved in designing, developing, and testing embedded systems for a range of applications and ensuring system performance.',
    'company': 'Intel Corporation',
    'jobtitle': 'Embedded Systems Engineer'
  },
  {
    'id': 15,
    'image': 'https://placehold.co/55x55?font=roboto&text=shopify',
    'time': '2 months ago',
    'location': 'Canada',
    'desc': 'Shopify is looking for a Product Designer to craft exceptional user experiences for our e-commerce platform. You will collaborate with product managers and engineers to design intuitive interfaces and solve complex user problems.',
    'company': 'Shopify Inc.',
    'jobtitle': 'Product Designer'
  },
  {
    'id': 16,
    'image': 'https://placehold.co/55x55?font=roboto&text=uber',
    'time': '4 months ago',
    'location': 'Singapore',
    'desc': 'Uber is looking for a Logistics Coordinator to manage and optimize transportation and delivery operations. You will work on improving operational efficiency, coordinating logistics activities, and ensuring timely delivery of services.',
    'company': 'Uber Technologies Inc.',
    'jobtitle': 'Logistics Coordinator'
  },
  {
    'id': 17,
    'image': 'https://placehold.co/55x55?font=roboto&text=adobe',
    'time': '1 month ago',
    'location': 'Netherlands',
    'desc': 'Adobe is looking for a Marketing Manager to develop and execute marketing strategies. The role involves creating campaigns, analyzing market trends, and working with cross-functional teams to enhance brand presence and drive sales.',
    'company': 'Adobe Inc.',
    'jobtitle': 'Marketing Manager'
  },
  {
    'id': 18,
    'image': 'https://placehold.co/55x55?font=roboto&text=ibm',
    'time': '6 months ago',
    'location': 'Italy',
    'desc': 'IBM is hiring a Cybersecurity Analyst to protect our systems and data from cyber threats. You will be responsible for monitoring security incidents, analyzing threats, and implementing measures to safeguard our digital assets.',
    'company': 'IBM Corporation',
    'jobtitle': 'Cybersecurity Analyst'
  },
  {
    'id': 19,
    'image': 'https://placehold.co/55x55?font=roboto&text=tesla',
    'time': '5 months ago',
    'location': 'USA',
    'desc': 'Tesla is seeking a Mechanical Engineer to design and develop advanced automotive components. The role involves working on cutting-edge technologies, improving product designs, and ensuring high performance and reliability.',
    'company': 'Tesla Inc.',
    'jobtitle': 'Mechanical Engineer'
  },
  {
    'id': 20,
    'image': 'https://placehold.co/55x55?font=roboto&text=ibm',
    'time': '6 months ago',
    'location': 'Italy',
    'desc': 'IBM is hiring a Cybersecurity Analyst to protect our systems and data from cyber threats. You will be responsible for monitoring security incidents, analyzing threats, and implementing measures to safeguard our digital assets.',
    'company': 'IBM Corporation',
    'jobtitle': 'Cybersecurity Analyst'
  }
];



const Job = () => {

  return (
    <div className="flex gap-2 justify-center flex-wrap py-10 px-5">
      {

        Data.map((data, index) => (

          <div className='justify-between items-center bg-blue-50 w-[355px] px-2 py-5 rounded-md shadow-md hover:bg-slate-300'>
            <div className='grid grid-cols-3'>
              <div className='col-span-1'>
                <div className='flex flex-col'>
                <span className='px-1'>{data.jobtitle}</span>
                <span className='px-1 text-xs text-greyish'>{data.location}   
                </span>
                </div>
              </div>
              <div className='col-span-2 flex items-center justify-end mr-2'>
              <BiTimeFive className='icon' />{data.time}
          </div>
            </div>

            <p className='mt-5 border-t-2 px-2'>
              <br></br>
              {data.desc}
            </p>
            <div className='grid grid-cols-5 items-center mt-1'>
            <div className='col-span-1'>
              <img src={data.image}></img></div>
             <div className='col-span-4'> <span className='text-sm py-1 px-1'>{data.company}</span> </div> 
            </div>
            <div className='grid grid-cols-10 items-center'>
              <div className='col-span-10 flex justify-center'>
              <button className='border rounded-lg p-2 bg-slate-100'>Apply Now</button>
              </div>
              </div>

          </div>

        ))

      }




    </div>
  )
}

export default Job