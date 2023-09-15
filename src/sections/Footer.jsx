import LinkdnIcon from "../assets/LinkdnIcon"
import GithubIcon from "../assets/GithubIcon"

export default function Footer() {
  return (
    <section className="flex justify-center items-center bg-gray-100 py-8">
      <div className="w-4/5 flex justify-center flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-600 mb-4"> Pol Imbing</h2>
        <div className="flex gap-6 mb-4">
          <a
            href="https://github.com/uraman2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon variant="blue" />
          </a>
          <a
            href="https://www.linkedin.com/in/pol-maynard-imbing-122a6315a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkdnIcon variant={"blue"} />
          </a>
        </div>
        <div className="text-sm text-gray-600">
          © Copyright <b>2023.</b> All Rights Reserved
        </div>
      </div>
    </section>
  )
}
