export default function Layout({ children, home }) {
  return (
    <footer class="flex flex-wrap items-center justify-between p-4">
        <div class="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center text-white">© 2020 Emily Chen</div>
        <div class="flex flex-grow items-center w-full lg:w-auto">
        <div class="mx-auto lg:mx-0 lg:ml-auto"><a class="inline-block mt-0 mr-8 text-blue-300 hover:text-blue-200" target="_blank" href="https://github.com/emsesc">Github</a><a class="inline-block mt-0 mr-8 text-blue-300 hover:text-blue-200" target="_blank" href="https://twitter.com/emsesc">Twitter</a><a class="inline-block mt-0 mr-8 text-blue-300 hover:text-blue-200" target="_blank" href="https://www.linkedin.com/in/emilyschen/">LinkedIn</a></div>
        </div>
    </footer>
  )
}