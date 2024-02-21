import { getUserTemplate } from '@/server-action/template/get-user-template'
import React from 'react'

const UserTemplate = async () =>
{
  const data = await getUserTemplate()
  console.log(data)
  return (
    <div>UserTemplate</div>
  )
}

export default UserTemplate