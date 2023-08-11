import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'bonjouridol'

export const client = prismic.createClient(repositoryName, {
    accessToken: 'MC5aTldyZnhBQUFDY0FtODNK.e--_ve-_vTHvv71ZFik_77-9YhXvv71LXCo4Pe-_ve-_vUPvv73vv70977-977-9NO-_vRzvv71t77-9',
  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
    {
        type: 'articles',
        path: '/articles',
    }
  ],
})