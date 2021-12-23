from fullstack.models import Post
from fullstack.photo.type import PostListType


def get_post_list(parnet, info, **kwargs):

    result = 'success'
    objects = Post.objects.all()

    return PostListType(result=result, objects=objects)

