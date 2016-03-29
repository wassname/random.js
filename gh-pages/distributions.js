/** List of distributions, arguments, and defaults **/

var distributions = {
    "arcsine": {
        "argDefaults": [0, 1],
        "argNames": ["min", "max"]
    },
    "beta": {
        "argDefaults": [1, 1, 0, 1],
        "argNames": ["v", "w", "min", "max"]
    },
    "cauchy": {
        "argDefaults": [1, 1],
        "argNames": ["a", "b"]
    },
    "chiSquare": {
        "argDefaults": [1],
        "argNames": ["df"]
    },
    "cosine": {
        "argDefaults": [0, 1],
        "argNames": ["min", "max"]
    },
    "doubleLog": {
        "argDefaults": [0, 1],
        "argNames": ["min", "max"]
    },
    "erlang": {
        "argDefaults": [1, 1],
        "argNames": ["b", "c"]
    },
    "exponential": {
        "argDefaults": [1, 1],
        "argNames": ["a", "b"]
    },
    "extremeValue": {
        "argDefaults": [0.5, 5, 0, 1],
        "argNames": ["a", "b"]
    },
    "fRatio": {
        "argDefaults": [1, 1],
        "argNames": ["v", "w"]
    },
    "gamma": {
        "argDefaults": [1, 1, 1],
        "argNames": ["a", "b", "c"]
    },
    "laplace": {
        "argDefaults": [1, 1],
        "argNames": ["a", "b"]
    },
    "logarithmic": {
        "argDefaults": [0, 1],
        "argNames": ["min", "max"]
    },
    "logistic": {
        "argDefaults": [1, 1],
        "argNames": ["a", "b"]
    },
    "lognormal": {
        "argDefaults": [1, 1, 1],
        "argNames": ["a", "mu", "sigma"]
    },
    "normal": {
        "argDefaults": [1, 1],
        "argNames": ["mu", "sigma"]
    },
    "parabolic": {
        "argDefaults": [0, 1],
        "argNames": ["min", "max"]
    },
    "pareto": {
        "argDefaults": [1],
        "argNames": ["c"]
    },
    "pearson5": {
        "argDefaults": [1, 1],
        "argNames": ["b", "c"]
    },
    "pearson6": {
        "argDefaults": [1, 1, 1],
        "argNames": ["b", "v", "w"]
    },
    "power": {
        "argDefaults": [1],
        "argNames": ["c"]
    },
    "rayleigh": {
        "argDefaults": [1, 1],
        "argNames": ["a", "b"]
    },
    "studentT": {
        "argDefaults": [1],
        "argNames": ["df"]
    },
    "triangular": {
        "argDefaults": [0, 1, 1],
        "argNames": ["min", "max", "c"]
    },
    "uniform": {
        "argDefaults": [0, 1],
        "argNames": ["min", "max"]
    },
    "weibull": {
        "argDefaults": [1, 1, 1],
        "argNames": ["a", "b", "c"]
    },
    "bernoulli": {
        "argDefaults": [0.5],
        "argNames": ["p"]
    },
    "binomial": {
        "argDefaults": [10, 0.5],
        "argNames": ["n", "p"]
    },
    "geometric": {
        "argDefaults": [0.5],
        "argNames": ["p"]
    },
    "hypergeometric": {
        "argDefaults": [6, 10, 4],
        "argNames": ["n", "N", "K"]
    },
    "negativeBinomial": {
        "argDefaults": [5, 0.5],
        "argNames": ["s", "p"]
    },
    "pascal": {
        "argDefaults": [5, 0.5],
        "argNames": ["s", "p"]
    },
    "poisson": {
        "argDefaults": [5],
        "argNames": ["mu"]
    },
    "uniformDiscrete": {
        "argDefaults": [1, 10],
        "argNames": ["i", "j"]
    }
}
