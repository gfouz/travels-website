const Post = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
      <main className='md:col-span-8 px-4 py-8'>
        "Embarking on a journey with React for front-end and Django Ninja for
        back-end empowers developers with a versatile and dynamic toolkit.
        Imagine seamlessly crafting interactive user interfaces with React's
        component-based architecture, while Django Ninja handles the heavy
        lifting of RESTful APIs and backend logic. For instance, consider a
        real-time chat application where React's state management and component
        reusability shine, providing a fluid user experience. Meanwhile, Django
        Ninja effortlessly manages authentication, data validation, and API
        endpoints, ensuring security and scalability. In e-commerce, React's
        virtual DOM optimization boosts performance, while Django Ninja's ORM
        simplifies database interactions, making inventory management and order
        processing a breeze. These detailed examples showcase how combining
        React and Django Ninja leverages the strengths of each framework,
        delivering exceptional speed, scalability, and functionality to modern
        web applications."
      </main>
      <aside className='md:col-span-4 md:block px-4 py-8'>
        <article className='col-span-4 bg-gray-100 rounded shadow p-4'>
          {/* Add sidebar content here (categories, archives, etc.) */}
          <h2 className='text-xl font-bold mb-4'>Categories</h2>
          <ul>
            <li className='mb-2'>
              <a href='#' className='text-gray-600 hover:text-gray-800'>
                Technology
              </a>
            </li>
            {/* Add more category links */}
          </ul>
        </article>
      </aside>
    </div>
  );
};

export default Post;
