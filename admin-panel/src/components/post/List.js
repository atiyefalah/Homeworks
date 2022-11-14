import { EyeOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../../redux/actions/post'
import Table from '../utils/Table'

const columns = [
  { title: 'شناسه', key: 'id' },
  { title: 'عنوان', key: 'title' },
  {
    key: 'action',
    render: (f, record) => (
      <Link to={`/post/${record.id}`}>
        <EyeOutlined />
      </Link>
    )
  }
]

class List extends Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <div>
        <Table columns={columns} data={this.props.posts} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
