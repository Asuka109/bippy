/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const OwnerTreeLazyImport = createFileRoute('/owner-tree')()
const MultiProviderTestLazyImport = createFileRoute('/multi-provider-test')()
const MiniReactScanLazyImport = createFileRoute('/mini-react-scan')()
const ChildrenRenderTestLazyImport = createFileRoute('/children-render-test')()
const BigGridTestLazyImport = createFileRoute('/big-grid-test')()

// Create/Update Routes

const OwnerTreeLazyRoute = OwnerTreeLazyImport.update({
  id: '/owner-tree',
  path: '/owner-tree',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/owner-tree.lazy').then((d) => d.Route))

const MultiProviderTestLazyRoute = MultiProviderTestLazyImport.update({
  id: '/multi-provider-test',
  path: '/multi-provider-test',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/multi-provider-test.lazy').then((d) => d.Route),
)

const MiniReactScanLazyRoute = MiniReactScanLazyImport.update({
  id: '/mini-react-scan',
  path: '/mini-react-scan',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/mini-react-scan.lazy').then((d) => d.Route),
)

const ChildrenRenderTestLazyRoute = ChildrenRenderTestLazyImport.update({
  id: '/children-render-test',
  path: '/children-render-test',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/children-render-test.lazy').then((d) => d.Route),
)

const BigGridTestLazyRoute = BigGridTestLazyImport.update({
  id: '/big-grid-test',
  path: '/big-grid-test',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/big-grid-test.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/big-grid-test': {
      id: '/big-grid-test'
      path: '/big-grid-test'
      fullPath: '/big-grid-test'
      preLoaderRoute: typeof BigGridTestLazyImport
      parentRoute: typeof rootRoute
    }
    '/children-render-test': {
      id: '/children-render-test'
      path: '/children-render-test'
      fullPath: '/children-render-test'
      preLoaderRoute: typeof ChildrenRenderTestLazyImport
      parentRoute: typeof rootRoute
    }
    '/mini-react-scan': {
      id: '/mini-react-scan'
      path: '/mini-react-scan'
      fullPath: '/mini-react-scan'
      preLoaderRoute: typeof MiniReactScanLazyImport
      parentRoute: typeof rootRoute
    }
    '/multi-provider-test': {
      id: '/multi-provider-test'
      path: '/multi-provider-test'
      fullPath: '/multi-provider-test'
      preLoaderRoute: typeof MultiProviderTestLazyImport
      parentRoute: typeof rootRoute
    }
    '/owner-tree': {
      id: '/owner-tree'
      path: '/owner-tree'
      fullPath: '/owner-tree'
      preLoaderRoute: typeof OwnerTreeLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/big-grid-test': typeof BigGridTestLazyRoute
  '/children-render-test': typeof ChildrenRenderTestLazyRoute
  '/mini-react-scan': typeof MiniReactScanLazyRoute
  '/multi-provider-test': typeof MultiProviderTestLazyRoute
  '/owner-tree': typeof OwnerTreeLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/big-grid-test': typeof BigGridTestLazyRoute
  '/children-render-test': typeof ChildrenRenderTestLazyRoute
  '/mini-react-scan': typeof MiniReactScanLazyRoute
  '/multi-provider-test': typeof MultiProviderTestLazyRoute
  '/owner-tree': typeof OwnerTreeLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/big-grid-test': typeof BigGridTestLazyRoute
  '/children-render-test': typeof ChildrenRenderTestLazyRoute
  '/mini-react-scan': typeof MiniReactScanLazyRoute
  '/multi-provider-test': typeof MultiProviderTestLazyRoute
  '/owner-tree': typeof OwnerTreeLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/big-grid-test'
    | '/children-render-test'
    | '/mini-react-scan'
    | '/multi-provider-test'
    | '/owner-tree'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/big-grid-test'
    | '/children-render-test'
    | '/mini-react-scan'
    | '/multi-provider-test'
    | '/owner-tree'
  id:
    | '__root__'
    | '/'
    | '/big-grid-test'
    | '/children-render-test'
    | '/mini-react-scan'
    | '/multi-provider-test'
    | '/owner-tree'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BigGridTestLazyRoute: typeof BigGridTestLazyRoute
  ChildrenRenderTestLazyRoute: typeof ChildrenRenderTestLazyRoute
  MiniReactScanLazyRoute: typeof MiniReactScanLazyRoute
  MultiProviderTestLazyRoute: typeof MultiProviderTestLazyRoute
  OwnerTreeLazyRoute: typeof OwnerTreeLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BigGridTestLazyRoute: BigGridTestLazyRoute,
  ChildrenRenderTestLazyRoute: ChildrenRenderTestLazyRoute,
  MiniReactScanLazyRoute: MiniReactScanLazyRoute,
  MultiProviderTestLazyRoute: MultiProviderTestLazyRoute,
  OwnerTreeLazyRoute: OwnerTreeLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/big-grid-test",
        "/children-render-test",
        "/mini-react-scan",
        "/multi-provider-test",
        "/owner-tree"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/big-grid-test": {
      "filePath": "big-grid-test.lazy.tsx"
    },
    "/children-render-test": {
      "filePath": "children-render-test.lazy.tsx"
    },
    "/mini-react-scan": {
      "filePath": "mini-react-scan.lazy.tsx"
    },
    "/multi-provider-test": {
      "filePath": "multi-provider-test.lazy.tsx"
    },
    "/owner-tree": {
      "filePath": "owner-tree.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
