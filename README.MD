# Welcome to ROR (Retail Opportunity Recommender)

Retail Opportunity Recommender is a tool for internal use that helps  marketplace operations teams identify high-opportunity product placements based on store location, past gig outcomes, and product performance data.

Retail Opportunity Recommender uses the addition of 3 main factors to calculate the placement score: **user score**, **daily sales performance**, and **rejection rate**
Each category is evaluated on a scale of 1-5 (except daily sales performance, which can exceed the base 5)
>**User Score avg**: Average user score for  consumed product in a given store

>**Daily sales avg**: Calculates the average daily sales and compares them with the sales from that product overall. It takes into consideration the time a given product is in the store, 
using the formula:
**(quantity_left/current_day-placement_day)**
or for placements completely  sold 
**(quantity_sold/last_sale_day-placement_day)** 

>**Rejection rate**: What percentage of all the sales are rejected


# Scalability

ROR is in beta testing but is projected to scale to millions of users.
- Key elements to  implement and take into consideration for the system design:

>CDN 

>Estrategically geo-located data centers' redundancies

>Load balancer geo-routed (based on the geo-located datacenters)

>Data Caching 

>Master/Slave database replication ( write operations handled by master & read operations handled by slaves)

>Proper database normalization, sharding and indexing

>Monitoring tools
