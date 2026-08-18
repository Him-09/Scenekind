# Scenekind Marketing Links

Do not use naked `scenekind.studio` links in external marketing placements.

Keep the visible copy simple when needed, but make the actual clickable URL include lowercase UTM parameters so Mixpanel can group traffic correctly.

## Approved Links

Instagram profile:

```text
https://scenekind.studio/?utm_source=instagram&utm_medium=social&utm_campaign=profile
```

LinkedIn profile:

```text
https://scenekind.studio/?utm_source=linkedin&utm_medium=social&utm_campaign=profile
```

Cold outreach:

```text
https://scenekind.studio/?utm_source=outreach&utm_medium=email&utm_campaign=prospecting
```

Meta Starter Sprint campaigns:

```text
https://scenekind.studio/?utm_source=meta&utm_medium=paid_social&utm_campaign=starter_sprint
```

Free teardown link for outreach:

```text
https://scenekind.studio/contact?intent=teardown&utm_source=outreach&utm_medium=email&utm_campaign=creative_teardown
```

Starter Sprint link for outreach:

```text
https://scenekind.studio/contact?intent=starter-sprint&utm_source=outreach&utm_medium=email&utm_campaign=starter_sprint
```

## Rules

- Use lowercase parameter names: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.
- Use lowercase values.
- Use underscores instead of spaces in campaign values.
- Keep source names stable: `instagram`, `linkedin`, `outreach`, `meta`.
- Keep medium names stable: `social`, `email`, `paid_social`, `dm`.
- Do not add UTMs to canonical SEO URLs, sitemap URLs, robots, Open Graph URLs, or internal app config.
- If a URL already has a query string, add UTM parameters with `&`; otherwise add them with `?`.
