import StudentHomeCard from "@/component/StudentHomeCard";


export default function DashboardHomePage() {
  const role='student'
  return (
    <div className="mx-0 container px-2 mt-10 ml-10">
      {/* Student */}
      {
        role==='student'? <div>
        <div className="grid grid-cols-2 gap-5">
          {course.data.enrolledCourses.map(enroll => (
        <StudentHomeCard 
          key={enroll.courseId} 
          title={enroll.title} 
          progress={enroll.progress} 
        />
      ))}
              
        </div>
      </div>
      :
      ''
      }
    </div>
  );
}

const course= {
  "success": true,
  "data": {
    "userId": "u123",
    "enrolledCourses": [
      {
        "courseId": "c1",
        "title": "React Basics",
        "progress": 40
      },
      {
        "courseId": "c2",
        "title": "Next.js Beginner",
        "progress": 70
      },
      {
        "courseId": "c3",
        "title": "JavaScript Advanced",
        "progress": 55
      },
      {
        "courseId": "c4",
        "title": "HTML & CSS Fundamentals",
        "progress": 90
      }
    ]
  }
}


