import Faculty from '../../faculties/entities/faculty.entity';
import Lecture from '../../lectures/entities/lecture.entity';
import Project from '../../projects/entities/project.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    code: string;

    @Column({ length: 100 })
    name: string;

    @ManyToOne(() => Project, (project) => project.subjects, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    project: Project;

    @OneToMany(() => Lecture, (lecture) => lecture.subject)
    lectures: Lecture[];

    @ManyToMany(() => Faculty, (faculty) => faculty.subjects)
    faculties: Faculty[];
}
