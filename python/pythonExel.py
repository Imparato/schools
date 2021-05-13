# from openpyxl import load_workbook
from collections import OrderedDict
import json
from os import name
from pathlib import Path
import xlrd
import re

data = {}


def get_days(days_list):
    days_list = days_list.lower()
    result = ""
    if "lu" in days_list: result = "Lundi"
    if "ma" in days_list: result += " Mardi"
    if "me" in days_list: result += " Mercredi"
    if "je" in days_list: result += " Jeudi"
    if "ve" in days_list: result += " Vendredi"
    if "sa" in days_list: result += " Samedi"
    if "di" in days_list: result += " Dimanche"
    return result.strip().replace(" ", ", ")


book = xlrd.open_workbook("./cours.xlsx")
for sheet_index in range(book.nsheets):
    sheet = book.sheet_by_index(sheet_index)
    slug = sheet.cell_value(1, 2)
    city = sheet.name
    intro = sheet.cell_value(1, 1).replace("_", "")
    if city == " __NE PAS EFFACER" or city == " __Sons":
        break
    # print(slug)
    current_index = 2
    data[city] = {"intro": intro, "cours": []}
    index = 1

    while current_index < sheet.nrows:
        order = index
        index = index + 1
        name = sheet.cell_value(current_index, 0).replace("_", "")
        if name == "## Autres cours à voir aussi …":
            break
        # cleaned_title = title.replace("_","")
        body = sheet.cell_value(current_index, 1).replace('\n', "")
        school_city = sheet.cell_value(current_index, 4)
        website = sheet.cell_value(current_index, 5)
        days = get_days(sheet.cell_value(current_index, 7))
        email = sheet.cell_value(current_index, 8)
        blog_url = sheet.cell_value(current_index, 9)
        # address = sheet.cell_value(current_index, 2)
        social_media = sheet.cell_value(current_index, 10)
        addresses = sheet.cell_value(current_index, 2)
        address = []
        if len(addresses.split("\n")) > 1:
            cp = sheet.cell_value(current_index, 3)
            if type(cp) is float or type(cp) is int:
                cp = str(round(cp))
            cityz = sheet.cell_value(current_index, 4)
            addresses = addresses.split("\n")
            cp = cp.split("\n")
            cityz = cityz.split("\n")
            for i in range(len(addresses)):
                address.append({
                 "address": addresses[i],
                 "zipcode": cp[i],
                 "city": cityz[i]
                })

        data[city]["cours"].append({
         "name": name,
         "order" : order,
         'blog_text': body,
         "addresses": address,
         'website': website,
         'email': email,
         'blog_url': blog_url,
         'network': social_media.split("\n"),
         'days': days
        })
        current_index = current_index + 1

# Write json file
with open("cours.json", "w", encoding="utf-8") as outfile:
    json.dump(data, outfile, ensure_ascii=False)

