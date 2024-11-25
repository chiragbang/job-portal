import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

const appliedJobs = [1,2,3,4,5,6,7,8]

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>Applied Jobs</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {
                appliedJobs.map((item,index)=>(
                  <TableRow key={index}>
                    <TableCell>25-11-2024</TableCell>
                    <TableCell>Fullstack Developer</TableCell>
                    <TableCell>Google</TableCell>
                    <TableCell className="text-right"><Badge className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-800 bg-green-100 border border-green-200 rounded-full">
  Selected
</Badge></TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable