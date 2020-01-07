// /pages/[slug].js

import * as React from 'react'
import { useCMS, useLocalForm } from 'tinacms'

export default function Page(props) {
  let cms = useCMS()
  let [post, form] = useLocalForm({
    id: props.fileRelativePath,
    label: 'Edit Post',
    initialValues: {
      title: props.title
    },
    fields: [{
      name: 'title',
      label: 'Title',
      component: 'text'
    }],
    onSubmit(data) {
      return cms.api.git.writeToDisk({
        fileRelativePath: props.fileRelativePath,
        content: JSON.stringify({ title: data.title })
      })
      .then(() => {
        return cms.api.git.commit({
          files: [props.fileRelativePath],
          message: `Commit from Tina: Update ${data.fileRelativePath}`
        })
      })
    }
  })
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

Page.getInitialProps = function(ctx) {
  const { slug } = ctx.query
  let content = require(`../posts/${slug}.json`)

  return {
    slug: slug,
    fileRelativePath: `/posts/${slug}.json`,
    title: content.title,
  }
}