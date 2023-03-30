import statbotics
import numpy as np
import pandas as pd

teamList = [118, 5427, 324, 231, 4219, 7691, 5261, 7616, 418, 5923, 9051, 4639, 4587, 8598, 6357, 8879, 2882, 3735, 2969, 7115, 2966, 5682, 3834, 5908, 9307, 8144, 8625, 5070, 7312, 8392, 9181, 7091, 9081, 9137]
sb = statbotics.Statbotics()

df = pd.read_excel('/Users/rush/StatboticsPythonScript/epaSheet.xlsx')

counter = 0
teamEPA = []

while counter < len(teamList):
    temp = sb.get_team_year(teamList[counter], 2023)

    df.loc[len(df.index)] = [teamList[counter], temp["epa_pre_champs"], temp["auto_epa_pre_champs"], temp["teleop_epa_pre_champs"], temp["endgame_epa_pre_champs"]]
    counter += 1

df.to_excel('/Users/rush/StatboticsPythonScript/epaSheet.xlsx')
print (df.head())