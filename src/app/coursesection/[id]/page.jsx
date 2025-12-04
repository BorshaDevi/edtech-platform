'use client'
import CourseDetail from "@/component/CourseDetail"
import { useParams } from "next/navigation"

const courseId=()=>{
    const params=useParams()
    return(
        <div>
        <CourseDetail params={params}></CourseDetail>
        </div>
    )
}
export default courseId