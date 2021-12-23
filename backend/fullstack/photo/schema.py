import graphene
from fullstack.photo.type import PostListType
from fullstack.photo.query import get_post_list


class Query(graphene.ObjectType):
    get_post_list = graphene.Field( 
        PostListType,
        title=graphene.String(description='제목'),
        writer=graphene.String(description='작성자'),
        resolver=get_post_list,
    )