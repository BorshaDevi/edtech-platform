'use client'
import CourseDetail from "@/component/CourseDetail"
import { useParams } from "next/navigation"

const courseSectionId=()=>{
    const params=useParams()
    console.log(params,"courseId page")
    return(
        <div>
        <CourseDetail params={params}></CourseDetail>
        </div>
    )
}
export default courseSectionId;