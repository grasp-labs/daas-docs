---
slug: PeriodId calculation in Xledger
title: PeriodId calculation in Xledger
author: Yuan Gu
author_title: Back End Engineer @ Grasplabs
tags: [xledger]
---

## PeriodId in Xledger

Most of the xledger queries provide `ModifiedAt` to filter the data on time. Well on transaction-like tables, 
i.e. Transaction, arTransactions, apTransactions there is no `ModifiedAt` filter. Instead `periodId` provided.

The convention between date and periodId followed:
```
periodId = 5136 + (year - 2020) * 256 + month
```