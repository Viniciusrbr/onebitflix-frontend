import Link from 'next/link';
import styles from './styles.module.scss'
import { CourseType } from '@/src/services/courseService';

interface props {
    course: CourseType
}

const SlideCard = function ({ course }: props) {
    return (
        <>
            <Link href={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
                <div className={styles.slide}>
                    <img
                        className={styles.slideImg}
                        src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
                        alt={course.name} />

                    <p className={styles.slideTitle}>{course.name}</p>
                    <p className={styles.slideDescription}>{course.synopsis}</p>
                </div>
            </Link>
        </>
    )
}

export default SlideCard;