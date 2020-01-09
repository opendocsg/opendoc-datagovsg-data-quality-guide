# Key Principles

## 1. Machine Readability
Machine-readable data is data in a format that can be understood by a computer. This means that relevant fields can be extracted and parsed by without human input. 

Just because a dataset is *digitally accessible* does not necessarily mean it is *machine readable* as well ([more on that here](https://www.data.gov/developers/blog/primer-machine-readability-online-documents-and-data)).

In the spirit of open data, datasets must be provided in non-proprietary file formats. Tabular data is provided as [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files or in [JSON](http://www.json.org/) format. 

Metadata must be excluded from data files. They will be included in a zip file with the data file (see the Data Package section below).

## 2. Tidy Data
The concept of *tidy data* is based on [this paper](http://vita.had.co.nz/papers/tidy-data.html) by Hadley Wickham, author of popular R packages ggplot2 and plyr.

Hadley proposes three principles:

1. **Each column is one variable.** This means each column must have the same unit of measurement

2. **Each row is one observation.** Note that this does not mean there is only one observed variable per row. There can be multiple observed variables per row: “An observation contains all values measured on the same unit (like a person, or a day, or a race) across attributes.” (Wickham Pg 3) 

3. **One type of observation unit per table** For example, observations on fertility rates of the whole female population and that females of different age groups should be in two tables: 
    - “Total Fertility Rate”, where observation unit is the entire female population
    - “Total Fertility Rate by Age Group”, where observation unit is female population of different age groups

## 3. Consistency
Each variable should be processed and documented in the same way across datasets. Examples include:

- Date formats
- Null and negligible values
- Unit of measurement

This makes it easier for users to mashup and use multiple datasets, even from different agencies


## 4. Granularity & Precision
As far as possible, agencies should provide raw, granular data instead of aggregated and process data, such as percentages. 

Totals and sub-totals should be in separate tables if needed. For example, there are cases where aggregate numbers (e.g. totals, indices) cannot be derived from granular data points. 

## 5. Human Readability
Lastly, datasets should also be presented in a way that makes sense to human users. 

This is why we have created a new set of metadata specifications along with this Data Quality Guide, to ensure that datasets are documented clearly. For instance, each table must be accompanied by a schema, which states the variable type. 

Plain language should be used in naming datasets and the elements in them as far as possible. Column names should be descriptive and meaningful. All jargon must be explained clearly, and where necessary, reference links should be provided. 
