import { Button } from "@/components/ui/button";
import courses from "@/data/course.json";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
const CourseSection =() => {
    return (
        <div className="mt-10">
            <div className="">
                <h2 className="text-center text-xl font-semibold">Our Courses</h2>
                {/* search filter sort */}
                <div>

                </div>

                {/* Card */}
                <div className="grid grid-cols-3 gap-10 ml-10 mt-10">
                    {courses.map(cou => (
                     <Card key={cou.id}>
                        <CardHeader>
                            <img src={cou.img} alt={cou.title} className="rounded-md"></img>
                            <CardTitle>{cou.title}</CardTitle>
                            <CardDescription>{cou.description.substring(0, 50) + "..."}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={`/coursesection/${cou.id}`}><Button className='w-full'>Course Detail</Button></Link>
                        </CardContent>
                    </Card> 
                    ))}
                </div>

                {/* pagination */}
              
            </div>
        </div>
    )
}
export default CourseSection;
{/* */}
