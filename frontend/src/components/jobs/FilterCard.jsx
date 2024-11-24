import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData = [
    {
        filterType: "Location",
        array:["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array:["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array:["0-40k", "42-1lakh", "1lakh-5lakh"]
    }
]

const FilterCard = () => {
  return (
    <div className="p-6">
    <h1 className="text-2xl font-semibold text-gray-800">Filter Jobs</h1>
    <hr className="mt-3 mb-6 border-gray-300" />
    <RadioGroup>
      {filterData.map((data, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">{data.filterType}</h2>
          {data.array.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 my-2 hover:bg-gray-100 p-2 rounded-md transition"
            >
              <RadioGroupItem value={item} />
              <Label className="text-gray-600">{item}</Label>
            </div>
          ))}
        </div>
      ))}
    </RadioGroup>
  </div>
  
  )
}

export default FilterCard