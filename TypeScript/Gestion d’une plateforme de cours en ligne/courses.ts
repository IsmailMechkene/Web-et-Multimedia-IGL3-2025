abstract class Course {
  constructor(public title: string) {
    this.title = title;
  }

  abstract getDescription(): string;
}

export class VideoCourse extends Course {
    constructor(title: string, public duration: number) {
        super(title);
    }

    getDescription(): string {
        return `Video Course: "${this.title}" (${this.duration} minutes)`;
    }
}

export class LiveCourse extends Course {
    constructor(title: string, public date: Date) {
        super(title);
    }

    getDescription(): string {
        return `📅 Live Course: "${this.title}" on ${this.date.toDateString()}`;
    }
}