import React from 'react'

const RecommendationCard = () => {
  return (
    <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-orange-200">
            <img src="/images/icon1.png" alt="Icon" />
          </div>
          <div>
            <h3 className="font-semibold">What is Arteriosclerosis and How Do I Prevent It?</h3>
            <p className="text-sm text-gray-500">12 April 2023</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-200">
            <img src="/images/icon2.png" alt="Icon" />
          </div>
          <div>
            <h3 className="font-semibold">What does a Cardiologist do? How to Work with One</h3>
            <p className="text-sm text-gray-500">14 April 2023</p>
          </div>
        </div>
      </div>
  )
}

export default RecommendationCard