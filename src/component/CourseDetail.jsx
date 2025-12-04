

const CourseDetail=({params})=>{
    const{id}=params
    console.log(id)
    return(
        <div>
             <h1>{id}</h1>
        </div>
    )
}
export default CourseDetail;