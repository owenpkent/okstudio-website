// Single source of truth for external service URLs and keys.
// Replace TODO values once accounts exist.

export const siteConfig = {
  // Buttondown newsletter, sign up at https://buttondown.com/
  // The form posts to https://buttondown.com/api/emails/embed-subscribe/<USERNAME>
  // TODO(setup): replace okstudio with the actual Buttondown username.
  buttondownUsername: 'okstudio',

  // Slack workspace invite link.
  // TODO(setup): generate from Slack admin → "Manage members" → "Invite people".
  slackInviteUrl: 'https://join.slack.com/t/okstudio/shared_invite/PLACEHOLDER',

  // Plausible Analytics, sign up at https://plausible.io/.
  // TODO(setup): set to 'okstud.io' (or okstudio.com if hosted differently)
  // and uncomment the script in Base.astro once the property exists.
  plausibleDomain: 'okstud.io',
  plausibleEnabled: false,

  // Public URLs.
  siteUrl: 'https://okstud.io',
  githubOrg: 'https://github.com/okstudio1',
  founderGithub: 'https://github.com/owenpkent',
  founderLinkedin: 'https://www.linkedin.com/in/owenpkent/',
} as const;
