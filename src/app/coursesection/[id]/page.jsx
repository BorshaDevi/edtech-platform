'use client'
import CourseDetail from "@/component/CourseDetail"
import { useParams } from "next/navigation"

const courseId=()=>{
    const params=useParams()
    console.log(params,"courseId page")
    return(
        <div>
        <CourseDetail params={params}></CourseDetail>
        </div>
    )
}
export default courseId