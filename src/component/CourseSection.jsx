import { Button } from "@/components/ui/button";
import courses from "@/data/course.json";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import Link from "next/link";
import { Input } from "@/components/ui/input";
const CourseSection = () => {
    return (
        <div className="mt-10">
            <div className="">
                <h2 className="text-center text-xl font-semibold">Our Courses</h2>
                {/* search filter sort */}
               <div className="flex justify-around mt-7">
                 {/* sort */}
                 <div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sort</SelectLabel>
                                    <SelectItem value="Web Development">150</SelectItem>
                                    <SelectItem value="App Development">130</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                 </div>



                 {/* search */}
                <div>
                  <form>
                    <Input type='search' placeholder='Search with title'></Input>
                  </form>
                </div>




                {/* Filter */}
                <div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Filter</SelectLabel>
                                    <SelectItem value="Web Development">Web Development</SelectItem>
                                    <SelectItem value="App Development">App Development</SelectItem>
                                    <SelectItem value="Data Science">Data Science</SelectItem>
                                    <SelectItem value="Marketing">Marketing</SelectItem>
                                    <SelectItem value="Design">Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
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
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
export default CourseSection;
{/* */ }
