'use client'
import course from "@/data/course.json";

const CourseDetail =({ params }) => {
    const { id } = params
    console.log(id, 'courseDetail')
    // const res=await axios.get(`/course.json/${id}`)
    // .then(res=> {
    //     console.log(res)
    // })
 
    const cou= course.find(c =>(c.id)==(id));
    console.log(cou ,'id detail');
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
           <h1>{cou.title}</h1>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={cou.img}
          alt={cou.title}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    )
}
export default CourseDetail;


 