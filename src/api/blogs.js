// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Making this the first true ones the uses a dictionary.',
        screens: blogImg1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'Loura Sweety',
        create_at: '25 Sep 2022',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        share:'26',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'A Behind the scenes look of your plumbing company',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'David Luis',
        create_at: '23 Sep 2022',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        share:'45',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Now grab your tool belt and get to work!',
        screens: blogImg3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magni harum nihil voluptates, recusandae.',
        author: 'Jenefer Willy',
        create_at: '21 Sep 2022',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        share:'58',
        blClass:'format-video',
    },
];
export default blogs;