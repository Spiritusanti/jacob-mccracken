// demo page for project pages

import { NextPage } from "next";
import Image from "next/image";
import placeholder from "../public/aquarium_current.jpg";
// purpose of this page is to experiment with the layout of the project page prior to building it with Prismic

const ProjectPage: NextPage = () => {
    return (
        <main>
            <h2>Project Title</h2>
            <section role={"projectBlurb"}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet architecto excepturi dicta aspernatur delectus, praesentium veniam dolorem corporis nam quibusdam blanditiis accusantium doloremque amet consequuntur fuga quasi ex dolores!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit harum assumenda ut, commodi perspiciatis soluta ea quos, libero, impedit officiis molestias totam quod exercitationem earum aliquam reiciendis ipsum rerum!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat rem veritatis ipsa perferendis, aliquid ullam officia cumque. Quas distinctio provident nostrum ipsa consequuntur perspiciatis odit sit natus deserunt eligendi? Perferendis!</p>
            </section>
            <aside>
                <div>
                    {/* live site and github links */}
                    <a href="github.com" target={"_blank"}>Github</a>
                    <a href="github.com" target={"_blank"}>Live Site</a>
                </div>
                <div>
                    <Image src={placeholder} alt={"project image"} height={250} width={250}></Image>
                    <Image src={placeholder} alt={"project image"} height={250} width={250}></Image>
                    <Image src={placeholder} alt={"project image"} height={250} width={250}></Image>
                </div>
            </aside>
        </main>
    )
}


export default ProjectPage;