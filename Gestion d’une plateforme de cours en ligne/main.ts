
import { Role, User, ApiResponse } from "./models";
import { VideoCourse, LiveCourse } from "./courses";
import { UserRepository } from "./repositories";


export function fetchUser(id: number): ApiResponse<User> {
    const mockUsers: User[] = [
        { id: 1, name: "Ismail", role: Role.student },
        { id: 2, name: "Mohamed", role: Role.teacher }
    ];

    const user = mockUsers.find(u => u.id === id);

    if (user) return { data: user };
    else return { error: `User with id ${id} not found.` };
}

const repo = new UserRepository();

const student: User = { id: 1, name: "Ismail", role: Role.student };
const teacher: User = { id: 2, name: "Mohamed", role: Role.teacher, email: "teacher@example.com" };

repo.add(student);
repo.add(teacher);

const videoCourse = new VideoCourse("TypeScript Basics", 120);
const liveCourse = new LiveCourse("Advanced TypeScript", new Date("2025-10-10"));

console.log(videoCourse.getDescription());
console.log(liveCourse.getDescription());
console.log("Users:", repo.getAll());

console.log(fetchUser(1));
console.log(fetchUser(3));
