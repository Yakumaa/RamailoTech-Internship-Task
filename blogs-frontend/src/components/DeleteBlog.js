import axios from "axios";
import '../DeleteBlog.css';

const DeleteBlog = ({ blogId, onDelete }) => {
  const handleDelete = () => {
    const csrftoken = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)')?.pop();

    if(window.confirm('Are you sure you want to delete this blog?')) {
      axios.delete(`/api/blog/${blogId}/delete/`, {
        headers: {
          'X-CSRFToken': csrftoken,
        },
      })
      .then(response => {
        console.log('Blog deleted successfully', response.data)
        onDelete()
      })
      .catch(error => {
        console.error('Error deleting blog: ', error)
      })
    }
  }

  return (
    <div className="delete-blog">
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteBlog;