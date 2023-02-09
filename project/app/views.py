from django.shortcuts import render
from .models import *
from .serializers import *

# Create your views here.
def word(request, _id):
    _word = Word.objects.get(id=_id)
    word_data = WordSerializer(_word).data

    definitions = _word.definition_set.all()
    definition_data = list(map(lambda definition: DefinitionSerializer(definition).data, definitions))

    return render(request, 'word.html', context={
        'data': word_data,
        'definitions': definition_data
    })
