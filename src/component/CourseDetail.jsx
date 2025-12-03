

const CourseDetail=async({params})=>{
    const{id}=await params
    console.log(id)
    return(
        <div>
             <h1>{id}</h1>
        </div>
    )
}
export default CourseDetail;