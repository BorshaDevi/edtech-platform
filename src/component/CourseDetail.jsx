'use client'
import { Button } from "@/components/ui/button";
import course from "@/data/course.json";

const CourseDetail = ({ params }) => {
  const { id } = params
  console.log(id, 'courseDetail')
  // const res=await axios.get(`/course.json/${id}`)
  // .then(res=> {
  //     console.log(res)
  // })

  const cou = course.find(c => (c.id) == (id));
  console.log(cou, 'id detail');
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <h1 className="font-bold text-start text-xl text-cyan-600 ">{cou.title}</h1>
            <p className="text-black">
              {cou.description}
            </p>
            <div className="mt-5">
              <h4 className="font-semibold text-cyan-800">Instructor : {cou.instructor}</h4>
              <div className="mt-5">
                <span className="font-semibold">Our Syllabus:</span>
                <ul>
                  {cou.syllabus.map((sy, index) => (
                    <li key={index} className="text-cyan-950 font-medium">{index}. {sy}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button className='w-full mt-10'>Enroll Course</Button>
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


