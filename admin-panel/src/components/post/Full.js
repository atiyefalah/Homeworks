import { Divider } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { usePost } from '../../hooks/usePost'

export default function Full () {
  const { id } = useParams()

  const post = usePost(id)

  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان مقاله</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <label>متن</label>
      <Divider type='vertical' />
      <span>{post.body}</span>
      <Divider />
      <Link to='/post'>بازگشت به لیست مقالات</Link>
    </div>
  )
}
