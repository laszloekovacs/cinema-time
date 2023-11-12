import React from "react"

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return <div>Employee {id} page</div>
}

export default Page
