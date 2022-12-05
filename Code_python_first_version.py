import plotly.graph_objects as go
import json
from urllib.request import urlopen

def sort_by_value(item):
  values = item[1]
  return 

#key = lambda i: sort_order.index(i[0])

url = 'https://raw.githubusercontent.com/SynEpita/SankeyDiagram/main/JSON_Test_File_1.json'
response = urlopen(url)
data = json.loads(response.read())
#print(data)
#data = {k: v for k, v in sorted(data['links'])}
#data = data.sort(key=lambda k: k['value'], reverse=True)
#data = sorted(data['links'], key=sort_by_key, reverse=True)
l_value = data['links']['value']
l_source = data['links']['source']
l_target = data['links']['target']
l_node_name = data['nodes']['name']
print(l_value, l_source, l_target, l_node_name)
l_value, l_source, l_target = zip(*sorted(zip(l_value, l_source, l_target)))
#l_value, l_source, l_target, l_node_name = zip(*sorted(zip(l_value, l_source, l_target, l_node_name)))
l_value = list(l_value)
l_source = list(l_source)
l_target = list(l_target)
#l_node_name = list(l_node_name)

print(l_value, l_source, l_target, l_node_name)


#link_dict = dict(source = data['links']['source'], target = data['links']['target'], value = data['links']['value'])
#print(link_dict)
#print(link_dict.items())
#link_dict = dict(sorted(link_dict.items(), key=lambda item: item[1]))

#link_dict = {k: v for k, v in (sorted(link_dict.items))}
#print(link_dict)




fig = go.Figure(data=[go.Sankey(
    valueformat = ".0f",
    valuesuffix = "TWh",
    # Define nodes
    node = dict(
      pad = 100,
      thickness = 15,
      line = dict(color = "black", width = 0.5),
      label = l_node_name,
      #color = data['nodes']['color']
    ),
    # Add links
    link = dict(
      source = l_source,
      target = l_target,
      value = l_value
    ))]) 

fig.update_layout(title_text="First_Test_JSON_Display",
                  font_size=14)
fig.show()
