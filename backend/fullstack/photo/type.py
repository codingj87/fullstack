import graphene
from graphene_django import DjangoObjectType
from fullstack.models import Post

class PostType(DjangoObjectType):

    class Meta:
        model = Post
        

class PostListType(graphene.ObjectType):
    result = graphene.Boolean()
    objects = graphene.List(PostType)