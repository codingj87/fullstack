from fullstack.models import Post
from fullstack.photo.type import PostListType


def get_post_list(parnet, info, **kwargs):

    result = 'success'
    # objects = Post.objects.all()

    objects = [
        {
            'id': 1,
            'title': 'New Balance 992',
            'contents': 'New Balance 992',
            'image': 'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTlfMjU0/MDAxNjE4Nzk5NTc3MjI4.3qMD-UiUTMIEWUysy2vZUTMKDDhUZtD7fRe8jQyiMA0g.-F6Pg6tMbdcKTPFcjXH0-mC03lTlmmeBJ7hqob6wpVkg.JPEG.jayuyu/%EB%89%B4%EB%B0%9C%EB%9E%80%EC%8A%A418.jpeg?type=w800',
            'writer': 'codingj87',
            'ctime': 1640236452,
        },
        {
            'id': 2,
            'title': 'PUMA suede',
            'contents': 'PUMA suede',
            'image': 'https://www.puma-catchup.com/wp-content/uploads/2018/12/G38-Bboy-Fabulous-750x417.jpg',
            'writer': 'codingj87',
            'ctime': 1640236452,
        }
    ]

    return PostListType(result=result, objects=objects)

