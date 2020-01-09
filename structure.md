# Structure for Tabular Data

## 1. Column Headers
- Only alphanumeric or these 3 special characters: .-_
    - Ampersand (&) should be replaced by “and” if needed
- Each must be unique
    - Can’t have two headers called "duration"
- All headers are in lower case
    - e.g. "rating"
- If header contains more than one word, use underscores to join
    - e.g. vehicle_type
- Units of measure should be omitted
- Keep short (less than 25 characters)
    - The full name can be stored in schema section of metadata file

## 2. Column Order
- *Date and time variables* should always be in the first column for time series data
- *Fixed variables* should be ordered with the highest-level variable on the left and most granular variable on the right
- *Observed variables* should always be on the rightmost columns

## 3. Row Order
- Rows should be ordered from the leftmost column to the rightmost one
- For datetime variables, order chronologically
- For fixed variables, order alphabetically

## 4. Date and Time Variables
- Based on ISO8601, an international standard for representing date and time. We chose the "extended format" with the hyphens because it is humanly more readable.
    - Compare 2016-01-01 to 20160101

- All date and time variables must be in UTC +8hrs unless specified.

- Date variables:

    | Interval    | Column name | Format     | Range of values    | Example   |
    |-------------|-------------|------------|--------------------|-----------|
    | Annual      | `year`      | YYYY       | YYYY: 1900 onwards | 2015      |
    | Monthly     | `month`     | YYYY-MM    | MM: 01 to 12       | 2015-01   |
    | Daily       | `date`      | YYYY-MM-DD | DD: 01 to 31       | 2015-01-01|
    | Weekly      | `week`      | YYYY-[W]WW | [W]WW: W01 to W52  | 2015-W01  |
    | Quarterly   | `quarter`   | YYYY-[Q]Q  | [Q]Q: Q1 to Q4     | 2015-Q1   |
    | Half-yearly | `half_year` | YYYY-[H]H  | [H]H: H1 or H2     | 2015-H1   |
    
- For financial periods, prefix “financial_” to column name:

    | Interval               | Column name           | Format    | Example |
    |------------------------|-----------------------|-----------|---------|
    | Financial, annual      | `financial_year`      | YYYY      | 2015    |
    | Financial, quarterly   | `financial_quarter`   | YYYY-[Q]Q | 2015-Q1 |
    | Financial, half-yearly | `financial_half_year` | YYYY-[H]H | 2015-H1 |

    - Financial year start-date must be indicated in metadata

- For date-time variables:

    | Type        | Column name | Format                     | Example             |
    |-------------|-------------|----------------------------|---------------------|
    | Date + time | `date_time` | YYYY-MM-DD[T]hh:mm         | 2015-01-01T12:00    |
    |             |             | *or* YYYY-MM-DD[T]hh:mm:ss | 2015-01-01T12:00:00 |
    | Time only   | `time`      | hh:mm                      | 12:00               |
    |             |             | *or* hh:mm:ss              | 12:00:00            |

- Specify the timezone if it is not UTC +8hrs:

    | Type        | Column name | Format                     | Example               |
    |-------------|-------------|----------------------------|-----------------------|
    | Date + time | `date_time` | YYYY-MM-DD[T]hh:mm+hh:mm   | 2015-01-01T12:00+00:00|
    |             |             | *or* YYYY-MM-DD[T]hh:mm:ss+hh:mm:ss | 2015-01-01T12:00:00+00:00:00 |

## 5. Textual Variables
- UTF-8 encoding should be used
    - This ensures that special characters such as Chinese characters can be decoded by users
- No line breaks within cells

## 6. Numeric Variables
- No commas
    - E.g. "1000" instead of "1,000"
- No units of measurement
    - Units should be in metadata instead
- Express as full number where possible
    - If rounded, indicate in metadata
    - E.g. "1200000" instead of "1.2" (million)
- No rounding if possible
    - Give raw numbers as far as possible
    - If rounding is needed, try to provide at least 2 decimal places of precision
- Percentages can be expressed as either a proportion out of 1 or 100. 
    - E.g.  20% can be expressed as 20 or 0.2
    - The representation of percentages must be consistent throughout each CSV file
    - Agencies must indicate how percentages are expressed in the schema

## 7. Location variables
- Coordinates in EPSG 4326 or EPSG 3414:
- Should be represented in two columns
    - EPSG 4326: `latitude` and `longitude` or 
    - EPSG 3414: `x_coord` and `y_coord`
- In positive/negative floating point
    - e.g. `latitude`: 1.2896700; `longitude`: 103.8500700
- EPSG should be indicated in metadata
- Addresses should be represented in two columns if possible
    - `address`: e.g. 1 Sims Avenue, Singapore 123456
    - `postal_code`: e.g. 123456

## 8. Null/negligible values
- For any variable type:

    | Value | Meaning                                |
    |-------|----------------------------------------|
    | na    | Datum not available or not applicable  |
    | -     | Datum is negligible or not significant |
    | s     | Datum is suppressed                    |

- If possible, explain why there are such values in the metadata